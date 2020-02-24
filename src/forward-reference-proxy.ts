import assert from "assert";

export const TARGET = createProxy.TARGET = Symbol('forward-reference-proxy-target');

// TODO implement a default `util.inspect.custom` fn that returns `realTarget`

/**
 * Return a proxy instance that will delegate all traps to a target instance which
 * can be bound to the proxy at a later date, either through explicit assignment or
 * a lazily-called getter callback.
 * 
 * This can be used to avoid circular reference issues in our AST declarations.
 */
export function createProxy<T extends object>(
    targetGetter: () => T = () => {throw 'not bound'},
    initialTarget = {}
): T
{
    let realTarget: T = undefined;
    let realTargetBound = false;
    /**
     * Called by every proxy trap to double-check that the target is bound before trying to perform
     * Reflect operations against it.
     */
    function checkIsBound() {
        if(!realTargetBound) {
            realTarget = targetGetter();
            realTargetBound = true;
        }
        assert(realTargetBound);
    }

    // All proxy traps delegate to realTarget
    // Additionally, get and set special-case our TARGET symbol, allowing
    // consumers to get/set the target whenever they want
    const handlers: ProxyHandler<T> = {
        getPrototypeOf (target: T): object | null {
            checkIsBound();
            return Reflect.getPrototypeOf(realTarget);
        },
        setPrototypeOf (target: T, v: any): boolean {
            checkIsBound();
            return Reflect.setPrototypeOf(realTarget, v);
        },
        isExtensible (target: T): boolean {
            checkIsBound();
            return Reflect.isExtensible(realTarget);
        },
        preventExtensions (target: T): boolean {
            checkIsBound();
            return Reflect.preventExtensions(realTarget);
        },
        getOwnPropertyDescriptor (target: T, p: PropertyKey): PropertyDescriptor | undefined {
            checkIsBound();
            return Reflect.getOwnPropertyDescriptor(realTarget, p);
        },
        has (target: T, p: PropertyKey): boolean {
            checkIsBound();
            return Reflect.has(realTarget, p);
        },

        // get and set support our special Symbol property to get and set the proxy's target

        get (target: T, p: PropertyKey, receiver: any): any {
            if(p === createProxy.TARGET) {
                return realTarget;
            } else {
                checkIsBound();
                return Reflect.get(realTarget, p, receiver);
            }
        },
        set (target: T, p: PropertyKey, value: any, receiver: any): boolean {
            if(p === createProxy.TARGET) {
                realTargetBound = true;
                realTarget = value;
                return true;
            } else {
                checkIsBound();
                return Reflect.set(realTarget, p, value, receiver);
            }
        },

        deleteProperty (target: T, p: PropertyKey): boolean {
            checkIsBound();
            return Reflect.deleteProperty(realTarget, p);
        },
        defineProperty (target: T, p: PropertyKey, attributes: PropertyDescriptor): boolean {
            checkIsBound();
            return Reflect.defineProperty(realTarget, p, attributes);
        },

        // enumerate has been deprecated; don't implement it
        // enumerate (target: T): PropertyKey[] {
        //     // Should return an array, but Reflect returns an iterable
        //     return Reflect.enumerate(realTarget) as any;
        // },

        ownKeys (target: T): PropertyKey[] {
            checkIsBound();
            return Reflect.ownKeys(realTarget);
        },
        apply (target: T, thisArg: any, argArray?: any): any {
            checkIsBound();
            // Type asserting because this only works for Function.
            // We want the runtime error if it's not a function
            return Reflect.apply(realTarget as any, thisArg, argArray);
        },
        construct (target: T, argArray: any, newTarget?: any): object {
            checkIsBound();
            // Type asserting because this only works for Function.
            // We want the runtime error if it's not a function
            return Reflect.construct(realTarget as any, argArray, newTarget);
        }
    }
    // type asserting because initialTarget is expected not to be a full-fledged `T` instance
    return new Proxy(initialTarget as any, handlers);
}