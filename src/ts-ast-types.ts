import { Prototype, proxy, ArrayType, LiteralType, ObjectProperty, ObjectType, UnionType, overrideProperties } from './type-system';
import { booleanType, numberType, stringType } from './type-system';

const LiteralZero = new LiteralType(0);

/*
 * Description of every type of value (object, array, primitive, map) that can occur in a TypeScript AST.
 */

export const SyntaxKind_AbstractKeyword = new LiteralType(122);
export const SyntaxKind_AsyncKeyword = new LiteralType(126);
export const SyntaxKind_ConstKeyword = new LiteralType(81);
export const SyntaxKind_DeclareKeyword = new LiteralType(130);
export const SyntaxKind_DefaultKeyword = new LiteralType(84);
export const SyntaxKind_ExportKeyword = new LiteralType(89);
export const SyntaxKind_PublicKeyword = new LiteralType(119);
export const SyntaxKind_PrivateKeyword = new LiteralType(117);
export const SyntaxKind_ProtectedKeyword = new LiteralType(118);
export const SyntaxKind_ReadonlyKeyword = new LiteralType(138);
export const SyntaxKind_StaticKeyword = new LiteralType(120);
export const SyntaxKind_Decorator = new LiteralType(157);
export const SyntaxKind_Identifier = new LiteralType(75);
export const SyntaxKind_StringLiteral = new LiteralType(10);
export const SyntaxKind_NumericLiteral = new LiteralType(8);
export const SyntaxKind_NoSubstitutionTemplateLiteral = new LiteralType(14);
export const SyntaxKind_ComputedPropertyName = new LiteralType(154);
export const SyntaxKind_PrivateIdentifier = new LiteralType(76);
export const SyntaxKind_ElementAccessExpression = new LiteralType(195);
export const SyntaxKind_QuestionDotToken = new LiteralType(28);
export const SyntaxKind_ObjectBindingPattern = new LiteralType(189);
export const SyntaxKind_Parameter = new LiteralType(156);
export const SyntaxKind_CallSignature = new LiteralType(165);
export const SyntaxKind_JSDocComment = new LiteralType(303);
export const SyntaxKind_ConstructSignature = new LiteralType(166);
export const SyntaxKind_JSDocTypeLiteral = new LiteralType(304);
export const SyntaxKind_QualifiedName = new LiteralType(153);
export const SyntaxKind_JSDocTypeExpression = new LiteralType(294);
export const SyntaxKind_QuestionToken = new LiteralType(57);
export const SyntaxKind_MethodSignature = new LiteralType(160);
export const SyntaxKind_ClassDeclaration = new LiteralType(245);
export const SyntaxKind_ClassExpression = new LiteralType(214);
export const SyntaxKind_InterfaceDeclaration = new LiteralType(246);
export const SyntaxKind_TypeLiteral = new LiteralType(173);
export const SyntaxKind_PropertySignature = new LiteralType(158);
export const SyntaxKind_ArrowFunction = new LiteralType(202);
export const SyntaxKind_EqualsGreaterThanToken = new LiteralType(38);
export const SyntaxKind_Block = new LiteralType(223);
export const SyntaxKind_AsteriskToken = new LiteralType(41);
export const SyntaxKind_ExclamationToken = new LiteralType(53);
export const SyntaxKind_ParenthesizedExpression = new LiteralType(200);
export const SyntaxKind_ObjectLiteralExpression = new LiteralType(193);
export const SyntaxKind_SpreadAssignment = new LiteralType(283);
export const SyntaxKind_ShorthandPropertyAssignment = new LiteralType(282);
export const SyntaxKind_EqualsToken = new LiteralType(62);
export const SyntaxKind_PropertyAssignment = new LiteralType(281);
export const SyntaxKind_FunctionExpression = new LiteralType(201);
export const SyntaxKind_LabeledStatement = new LiteralType(238);
export const SyntaxKind_ExpressionStatement = new LiteralType(226);
export const SyntaxKind_VariableStatement = new LiteralType(225);
export const SyntaxKind_VariableDeclarationList = new LiteralType(243);
export const SyntaxKind_ForStatement = new LiteralType(230);
export const SyntaxKind_ForInStatement = new LiteralType(231);
export const SyntaxKind_ForOfStatement = new LiteralType(232);
export const SyntaxKind_AwaitKeyword = new LiteralType(127);
export const SyntaxKind_FunctionDeclaration = new LiteralType(244);
export const SyntaxKind_Constructor = new LiteralType(162);
export const SyntaxKind_MethodDeclaration = new LiteralType(161);
export const SyntaxKind_PropertyDeclaration = new LiteralType(159);
export const SyntaxKind_GetAccessor = new LiteralType(163);
export const SyntaxKind_SetAccessor = new LiteralType(164);
export const SyntaxKind_TypeAliasDeclaration = new LiteralType(247);
export const SyntaxKind_EnumMember = new LiteralType(284);
export const SyntaxKind_EnumDeclaration = new LiteralType(248);
export const SyntaxKind_ModuleDeclaration = new LiteralType(249);
export const SyntaxKind_SourceFile = new LiteralType(290);
export const SyntaxKind_EndOfFileToken = new LiteralType(1);
export const SyntaxKind_ModuleBlock = new LiteralType(250);
export const SyntaxKind_ImportEqualsDeclaration = new LiteralType(253);
export const SyntaxKind_ExternalModuleReference = new LiteralType(265);
export const SyntaxKind_IndexSignature = new LiteralType(167);
export const SyntaxKind_FunctionType = new LiteralType(170);
export const SyntaxKind_ConstructorType = new LiteralType(171);
export const SyntaxKind_JSDocFunctionType = new LiteralType(300);
export const SyntaxKind_ExportDeclaration = new LiteralType(260);
export const SyntaxKind_NamespaceExport = new LiteralType(262);
export const SyntaxKind_NamedExports = new LiteralType(261);
export const SyntaxKind_DotDotDotToken = new LiteralType(25);
export const SyntaxKind_ArrayBindingPattern = new LiteralType(190);
export const SyntaxKind_VariableDeclaration = new LiteralType(242);
export const SyntaxKind_CatchClause = new LiteralType(280);
export const SyntaxKind_TryStatement = new LiteralType(240);
export const SyntaxKind_BindingElement = new LiteralType(191);
export const SyntaxKind_PropertyAccessExpression = new LiteralType(194);
export const SyntaxKind_TypeParameter = new LiteralType(155);
export const SyntaxKind_InferType = new LiteralType(181);
export const SyntaxKind_JSDocTemplateTag = new LiteralType(320);
export const SyntaxKind_HeritageClause = new LiteralType(279);
export const SyntaxKind_ExpressionWithTypeArguments = new LiteralType(216);
export const SyntaxKind_JSDocAugmentsTag = new LiteralType(307);
export const SyntaxKind_OmittedExpression = new LiteralType(215);
export const SyntaxKind_ExportSpecifier = new LiteralType(263);
export const SyntaxKind_PartiallyEmittedExpression = new LiteralType(325);
export const SyntaxKind_PrefixUnaryExpression = new LiteralType(207);
export const SyntaxKind_PostfixUnaryExpression = new LiteralType(208);
export const SyntaxKind_NullKeyword = new LiteralType(100);
export const SyntaxKind_ThisKeyword = new LiteralType(104);
export const SyntaxKind_SuperKeyword = new LiteralType(102);
export const SyntaxKind_ImportKeyword = new LiteralType(96);
export const SyntaxKind_DeleteExpression = new LiteralType(203);
export const SyntaxKind_TypeOfExpression = new LiteralType(204);
export const SyntaxKind_VoidExpression = new LiteralType(205);
export const SyntaxKind_AwaitExpression = new LiteralType(206);
export const SyntaxKind_YieldExpression = new LiteralType(212);
export const SyntaxKind_SyntheticExpression = new LiteralType(220);
export const SyntaxKind_AsteriskAsteriskToken = new LiteralType(42);
export const SyntaxKind_BinaryExpression = new LiteralType(209);
export const SyntaxKind_ArrayLiteralExpression = new LiteralType(192);
export const SyntaxKind_SpreadElement = new LiteralType(213);
export const SyntaxKind_CallExpression = new LiteralType(196);
export const SyntaxKind_NewExpression = new LiteralType(197);
export const SyntaxKind_ConditionalExpression = new LiteralType(210);
export const SyntaxKind_ColonToken = new LiteralType(58);
export const SyntaxKind_RegularExpressionLiteral = new LiteralType(13);
export const SyntaxKind_BigIntLiteral = new LiteralType(9);
export const SyntaxKind_TemplateHead = new LiteralType(15);
export const SyntaxKind_TemplateExpression = new LiteralType(211);
export const SyntaxKind_TemplateSpan = new LiteralType(221);
export const SyntaxKind_TemplateMiddle = new LiteralType(16);
export const SyntaxKind_TemplateTail = new LiteralType(17);
export const SyntaxKind_TaggedTemplateExpression = new LiteralType(198);
export const SyntaxKind_JsxOpeningElement = new LiteralType(268);
export const SyntaxKind_JsxElement = new LiteralType(266);
export const SyntaxKind_JsxClosingElement = new LiteralType(269);
export const SyntaxKind_JsxAttributes = new LiteralType(274);
export const SyntaxKind_JsxSelfClosingElement = new LiteralType(267);
export const SyntaxKind_JsxAttribute = new LiteralType(273);
export const SyntaxKind_JsxExpression = new LiteralType(276);
export const SyntaxKind_JsxSpreadAttribute = new LiteralType(275);
export const SyntaxKind_JsxFragment = new LiteralType(270);
export const SyntaxKind_JsxOpeningFragment = new LiteralType(271);
export const SyntaxKind_JsxClosingFragment = new LiteralType(272);
export const SyntaxKind_JsxText = new LiteralType(11);
export const SyntaxKind_AsExpression = new LiteralType(217);
export const SyntaxKind_TypeAssertionExpression = new LiteralType(199);
export const SyntaxKind_NonNullExpression = new LiteralType(218);
export const SyntaxKind_MetaProperty = new LiteralType(219);
export const SyntaxKind_NotEmittedStatement = new LiteralType(324);
export const SyntaxKind_EndOfDeclarationMarker = new LiteralType(328);
export const SyntaxKind_CommaListExpression = new LiteralType(326);
export const SyntaxKind_MergeDeclarationMarker = new LiteralType(327);
export const SyntaxKind_SyntheticReferenceExpression = new LiteralType(329);
export const SyntaxKind_EmptyStatement = new LiteralType(224);
export const SyntaxKind_DebuggerStatement = new LiteralType(241);
export const SyntaxKind_MissingDeclaration = new LiteralType(264);
export const SyntaxKind_CaseClause = new LiteralType(277);
export const SyntaxKind_CaseBlock = new LiteralType(251);
export const SyntaxKind_SwitchStatement = new LiteralType(237);
export const SyntaxKind_DefaultClause = new LiteralType(278);
export const SyntaxKind_IfStatement = new LiteralType(227);
export const SyntaxKind_DoStatement = new LiteralType(228);
export const SyntaxKind_WhileStatement = new LiteralType(229);
export const SyntaxKind_BreakStatement = new LiteralType(234);
export const SyntaxKind_ContinueStatement = new LiteralType(233);
export const SyntaxKind_ReturnStatement = new LiteralType(235);
export const SyntaxKind_WithStatement = new LiteralType(236);
export const SyntaxKind_ThrowStatement = new LiteralType(239);
export const SyntaxKind_JSDocTypedefTag = new LiteralType(321);
export const SyntaxKind_JSDocCallbackTag = new LiteralType(314);
export const SyntaxKind_JSDocSignature = new LiteralType(305);
export const SyntaxKind_JSDocParameterTag = new LiteralType(316);
export const SyntaxKind_JSDocReturnTag = new LiteralType(317);
export const SyntaxKind_ImportDeclaration = new LiteralType(254);
export const SyntaxKind_ImportClause = new LiteralType(255);
export const SyntaxKind_NamespaceImport = new LiteralType(256);
export const SyntaxKind_NamedImports = new LiteralType(257);
export const SyntaxKind_ImportSpecifier = new LiteralType(258);
export const SyntaxKind_NamespaceExportDeclaration = new LiteralType(252);
export const SyntaxKind_ExportAssignment = new LiteralType(259);
export const SyntaxKind_JSDocAllType = new LiteralType(295);
export const SyntaxKind_JSDocUnknownType = new LiteralType(296);
export const SyntaxKind_JSDocNonNullableType = new LiteralType(298);
export const SyntaxKind_JSDocNullableType = new LiteralType(297);
export const SyntaxKind_JSDocOptionalType = new LiteralType(299);
export const SyntaxKind_JSDocVariadicType = new LiteralType(301);
export const SyntaxKind_JSDocNamepathType = new LiteralType(302);
export const SyntaxKind_JSDocTag = new LiteralType(306);
export const SyntaxKind_JSDocAuthorTag = new LiteralType(308);
export const SyntaxKind_JSDocClassTag = new LiteralType(309);
export const SyntaxKind_JSDocPublicTag = new LiteralType(310);
export const SyntaxKind_JSDocPrivateTag = new LiteralType(311);
export const SyntaxKind_JSDocProtectedTag = new LiteralType(312);
export const SyntaxKind_JSDocReadonlyTag = new LiteralType(313);
export const SyntaxKind_JSDocEnumTag = new LiteralType(315);
export const SyntaxKind_JSDocThisTag = new LiteralType(318);
export const SyntaxKind_JSDocTypeTag = new LiteralType(319);
export const SyntaxKind_JSDocPropertyTag = new LiteralType(322);

export const NodeArray = new ArrayType(proxy(() => Node), [
    new ObjectProperty('pos', true, numberType),
    new ObjectProperty('end', true, numberType),
    new ObjectProperty('hasTrailingComma', false, booleanType),
    new ObjectProperty('transformFlags', false, numberType)
]);
export const commonNodeProperties1 = [
    new ObjectProperty("flags", true, proxy(() => numberType)),
    new ObjectProperty("modifierFlagsCache", true, LiteralZero),
    new ObjectProperty("transformFlags", true, LiteralZero),
    new ObjectProperty("decorators", false, proxy(() => NodeArray)),
    new ObjectProperty("modifiers", false, proxy(() => ModifiersArray)),
    new ObjectProperty("id", false, proxy(() => numberType)),
];
export const commonNodeProperties2 = [
    new ObjectProperty("original", false, proxy(() => Node)),
    new ObjectProperty("pos", true, proxy(() => numberType)),
    new ObjectProperty("end", true, proxy(() => numberType)),
];
export const commonNodeProperties = [
    ...commonNodeProperties1,
    // new ObjectProperty("parent", true, proxy(() => Node)),
    ...commonNodeProperties2
];
export const commonNodePropertiesSansParent = [
    ...commonNodeProperties1,
    // parent goes here
    ...commonNodeProperties2
];

export const jsDocContainerProperties = [
    new ObjectProperty("jsDoc", false, proxy(() => Array_JSDoc)),
    new ObjectProperty("jsDocCache", false, proxy(() => Array_JSDocTag))
];

// TODO replace with a union of all Node `kind`s
export const Node = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => numberType)),
    ...commonNodeProperties,
]);

export const Token_AbstractKeyword = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_AbstractKeyword)),
    ...commonNodeProperties,
]);
export const Token_AsyncKeyword = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_AsyncKeyword)),
    ...commonNodeProperties,
]);
export const Token_ConstKeyword = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ConstKeyword)),
    ...commonNodeProperties,
]);
export const Token_DeclareKeyword = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_DeclareKeyword)),
    ...commonNodeProperties,
]);
export const Token_DefaultKeyword = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_DefaultKeyword)),
    ...commonNodeProperties,
]);
export const Token_ExportKeyword = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ExportKeyword)),
    ...commonNodeProperties,
]);
export const Token_PublicKeyword = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_PublicKeyword)),
    ...commonNodeProperties,
]);
export const Token_PrivateKeyword = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_PrivateKeyword)),
    ...commonNodeProperties,
]);
export const Token_ProtectedKeyword = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ProtectedKeyword)),
    ...commonNodeProperties,
]);
export const Token_ReadonlyKeyword = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ReadonlyKeyword)),
    ...commonNodeProperties,
]);
export const Token_StaticKeyword = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_StaticKeyword)),
    ...commonNodeProperties,
]);
export const Token_QuestionDotToken = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_QuestionDotToken)),
    ...commonNodeProperties,
]);
export const Token_QuestionToken = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_QuestionToken)),
    ...commonNodeProperties,
]);
export const Token_EqualsGreaterThanToken = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_EqualsGreaterThanToken)),
    ...commonNodeProperties,
]);
export const Token_AsteriskToken = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_AsteriskToken)),
    ...commonNodeProperties,
]);
export const Token_ExclamationToken = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ExclamationToken)),
    ...commonNodeProperties,
]);
export const Token_AwaitKeyword = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_AwaitKeyword)),
    ...commonNodeProperties,
]);
export const Token_EndOfFileToken_old = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_EndOfFileToken)),
    ...commonNodeProperties,
]);
export const Token_EndOfFileToken = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_EndOfFileToken)),
    ...commonNodeProperties,
    ...jsDocContainerProperties
]);
export const Token_EqualsToken = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_EqualsToken)),
    ...commonNodeProperties,
]);
export const Token_ColonToken = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ColonToken)),
    ...commonNodeProperties,
]);
export const Token_DotDotDotToken = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_DotDotDotToken)),
    ...commonNodeProperties,
]);


export const ModifiersArray = new ArrayType(proxy(() => ModifierToken), []);
export const ModifierToken = new UnionType([

    proxy(() => Token_AbstractKeyword),
    proxy(() => Token_AsyncKeyword),
    proxy(() => Token_ConstKeyword),
    proxy(() => Token_DeclareKeyword),
    proxy(() => Token_DefaultKeyword),
    proxy(() => Token_ExportKeyword),
    proxy(() => Token_PublicKeyword),
    proxy(() => Token_PrivateKeyword),
    proxy(() => Token_ProtectedKeyword),
    proxy(() => Token_ReadonlyKeyword),
    proxy(() => Token_StaticKeyword)

]);
export const Decorator = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_Decorator)),
    // new ObjectProperty("parent", true, proxy(() => NamedDeclaration)),
    new ObjectProperty("expression", true, proxy(() => LeftHandSideExpression)),
    ...commonNodePropertiesSansParent,
]);
export const NamedDeclaration = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("name", false, proxy(() => DeclarationName)),
    new ObjectProperty("kind", true, proxy(() => numberType)),
    ...commonNodeProperties,
]);
const identifierProperties = [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_Identifier)),
    new ObjectProperty("escapedText", true, proxy(() => stringType)),
    new ObjectProperty("originalKeywordKind", false, proxy(() => numberType)),
    new ObjectProperty("autoGenerateFlags", false, proxy(() => numberType)),
    new ObjectProperty("autoGenerateId", false, proxy(() => numberType)),
    new ObjectProperty("isInJSDocNamespace", false, proxy(() => booleanType)),
    new ObjectProperty("typeArguments", false, proxy(() => NodeArray)),
    new ObjectProperty("jsdocDotPos", false, proxy(() => numberType)),
    ...commonNodeProperties,
];
export const Identifier = new ObjectType(Prototype.NodeObject, identifierProperties);
export const StringLiteral = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_StringLiteral)),
    new ObjectProperty("textSourceNode", false, proxy(() => StringLiteral_TextSourceNode)),
    new ObjectProperty("singleQuote", false, proxy(() => booleanType)),
    new ObjectProperty("text", true, proxy(() => stringType)),
    new ObjectProperty("isUnterminated", false, proxy(() => booleanType)),
    new ObjectProperty("hasExtendedUnicodeEscape", false, proxy(() => booleanType)),
    ...commonNodeProperties,
]);
export const NumericLiteral = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_NumericLiteral)),
    new ObjectProperty("numericLiteralFlags", true, proxy(() => numberType)),
    new ObjectProperty("text", true, proxy(() => stringType)),
    new ObjectProperty("isUnterminated", false, proxy(() => booleanType)),
    new ObjectProperty("hasExtendedUnicodeEscape", false, proxy(() => booleanType)),
    ...commonNodeProperties,
]);
export const NoSubstitutionTemplateLiteral = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_NoSubstitutionTemplateLiteral)),
    new ObjectProperty("templateFlags", false, proxy(() => numberType)),
    new ObjectProperty("text", true, proxy(() => stringType)),
    new ObjectProperty("isUnterminated", false, proxy(() => booleanType)),
    new ObjectProperty("hasExtendedUnicodeEscape", false, proxy(() => booleanType)),
    ...commonNodeProperties,
    new ObjectProperty("rawText", false, proxy(() => stringType)),
]);
export const StringLiteral_TextSourceNode = new UnionType([
    proxy(() => Identifier),
    proxy(() => StringLiteral),
    proxy(() => NumericLiteral),
    proxy(() => NoSubstitutionTemplateLiteral)
]);
export const ComputedPropertyName = new ObjectType(Prototype.NodeObject, [
    // new ObjectProperty("parent", true, proxy(() => Declaration)),
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ComputedPropertyName)),
    new ObjectProperty("expression", true, proxy(() => Expression)),
    ...commonNodePropertiesSansParent,
]);
const declarationProperties = [
    new ObjectProperty("kind", true, proxy(() => numberType)),
    ...commonNodeProperties,
];
export const Declaration = new ObjectType(Prototype.NodeObject, declarationProperties);
// TODO replace with a union of all possible `expression` kinds
export const Expression = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => numberType)),
    ...commonNodeProperties,
]);
export const PrivateIdentifier = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_PrivateIdentifier)),
    new ObjectProperty("escapedText", true, proxy(() => stringType)),
    ...commonNodeProperties,
]);
const elementAccessExpressionProperties = [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ElementAccessExpression)),
    new ObjectProperty("expression", true, proxy(() => LeftHandSideExpression)),
    new ObjectProperty("questionDotToken", false, proxy(() => Token_QuestionDotToken)),
    new ObjectProperty("argumentExpression", true, proxy(() => Expression)),
    ...commonNodeProperties,
];
export const ElementAccessExpression = new ObjectType(Prototype.NodeObject, elementAccessExpressionProperties);
export const LeftHandSideExpression = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => numberType)),
    ...commonNodeProperties,
]);
export const ObjectBindingPattern = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ObjectBindingPattern)),
    // // new ObjectProperty("parent", true, proxy(() => ObjectBindingPattern_Parent)),
    new ObjectProperty("elements", true, proxy(() => NodeArray)),
    ...commonNodePropertiesSansParent,
]);
export const ParameterDeclaration = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_Parameter)),
    // new ObjectProperty("parent", true, proxy(() => SignatureDeclaration)),
    new ObjectProperty("dotDotDotToken", false, proxy(() => Token_DotDotDotToken)),
    new ObjectProperty("name", true, proxy(() => BindingName)),
    new ObjectProperty("questionToken", false, proxy(() => Token_QuestionToken)),
    new ObjectProperty("type", false, proxy(() => TypeNode)),
    new ObjectProperty("initializer", false, proxy(() => Expression)),
    ...commonNodePropertiesSansParent,
    ...jsDocContainerProperties,
]);
export const CallSignatureDeclaration = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_CallSignature)),
    new ObjectProperty("name", false, proxy(() => PropertyName)),
    new ObjectProperty("typeParameters", false, proxy(() => NodeArray)),
    new ObjectProperty("parameters", true, proxy(() => NodeArray)),
    new ObjectProperty("type", false, proxy(() => TypeNode)),
    new ObjectProperty("typeArguments", false, proxy(() => NodeArray)),
    ...commonNodeProperties,
    ...jsDocContainerProperties,
    new ObjectProperty("questionToken", false, proxy(() => Token_QuestionToken)),
]);
export const PropertyName = new UnionType([

    proxy(() => Identifier),
    proxy(() => StringLiteral),
    proxy(() => NumericLiteral),
    proxy(() => ComputedPropertyName),
    proxy(() => PrivateIdentifier)

]);
export const TypeNode = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => numberType)),
    ...commonNodeProperties,
]);
export const JSDoc = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocComment)),
    // new ObjectProperty("parent", true, proxy(() => HasJSDoc)),
    new ObjectProperty("tags", false, proxy(() => NodeArray)),
    new ObjectProperty("comment", false, proxy(() => stringType)),
    ...commonNodePropertiesSansParent,
]);
export const ConstructSignatureDeclaration = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ConstructSignature)),
    new ObjectProperty("name", false, proxy(() => PropertyName)),
    new ObjectProperty("typeParameters", false, proxy(() => NodeArray)),
    new ObjectProperty("parameters", true, proxy(() => NodeArray)),
    new ObjectProperty("type", false, proxy(() => TypeNode)),
    new ObjectProperty("typeArguments", false, proxy(() => NodeArray)),
    ...commonNodeProperties,
    ...jsDocContainerProperties,
    new ObjectProperty("questionToken", false, proxy(() => Token_QuestionToken)),
]);
export const Array_JSDoc = new ArrayType(proxy(() => JSDoc), []);
export const Array_JSDocTag = new ArrayType(proxy(() => JSDocTag), []);
export const JSDocTag = new ObjectType(Prototype.NodeObject, [
    // new ObjectProperty("parent", true, proxy(() => JSDocOrJSDocTypeLiteral)),
    new ObjectProperty("tagName", true, proxy(() => Identifier)),
    new ObjectProperty("comment", false, proxy(() => stringType)),
    new ObjectProperty("kind", true, proxy(() => numberType)),
    ...commonNodePropertiesSansParent,
]);
export const JSDocTypeLiteral = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocTypeLiteral)),
    new ObjectProperty("jsDocPropertyTags", false, proxy(() => Array_JSDocPropertyLikeTag)),
    new ObjectProperty("isArrayType", false, proxy(() => booleanType)),
    ...commonNodeProperties,
]);
export const Array_JSDocPropertyLikeTag = new ArrayType(proxy(() => JSDocPropertyLikeTag), []);
export const JSDocPropertyLikeTag = new ObjectType(Prototype.NodeObject, [
    // new ObjectProperty("parent", true, proxy(() => JSDoc)),
    new ObjectProperty("name", true, proxy(() => EntityName)),
    new ObjectProperty("typeExpression", false, proxy(() => JSDocTypeExpression)),
    new ObjectProperty("isNameFirst", true, proxy(() => booleanType)),
    new ObjectProperty("isBracketed", true, proxy(() => booleanType)),
    new ObjectProperty("tagName", true, proxy(() => Identifier)),
    new ObjectProperty("comment", false, proxy(() => stringType)),
    new ObjectProperty("kind", true, proxy(() => numberType)),
    ...commonNodePropertiesSansParent,
]);
export const QualifiedName = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_QualifiedName)),
    new ObjectProperty("left", true, proxy(() => EntityName)),
    new ObjectProperty("right", true, proxy(() => Identifier)),
    new ObjectProperty("jsdocDotPos", false, proxy(() => numberType)),
    ...commonNodeProperties,
]);
export const EntityName = new UnionType([

    proxy(() => Identifier),
    proxy(() => QualifiedName)

]);
export const JSDocTypeExpression = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocTypeExpression)),
    new ObjectProperty("type", true, proxy(() => TypeNode)),
    ...commonNodeProperties,
]);
export const MethodSignature = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_MethodSignature)),
    // new ObjectProperty("parent", true, proxy(() => ObjectTypeDeclaration)),
    new ObjectProperty("name", true, proxy(() => PropertyName)),
    new ObjectProperty("typeParameters", false, proxy(() => NodeArray)),
    new ObjectProperty("parameters", true, proxy(() => NodeArray)),
    new ObjectProperty("type", false, proxy(() => TypeNode)),
    new ObjectProperty("typeArguments", false, proxy(() => NodeArray)),
    ...commonNodePropertiesSansParent,
    ...jsDocContainerProperties,
    new ObjectProperty("questionToken", false, proxy(() => Token_QuestionToken)),
]);
export const ClassDeclaration = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ClassDeclaration)),
    new ObjectProperty("name", false, proxy(() => Identifier)),
    new ObjectProperty("typeParameters", false, proxy(() => NodeArray)),
    new ObjectProperty("heritageClauses", false, proxy(() => NodeArray)),
    new ObjectProperty("members", true, proxy(() => NodeArray)),
    ...commonNodeProperties,
    ...jsDocContainerProperties,
]);
export const ClassExpression = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ClassExpression)),
    new ObjectProperty("name", false, proxy(() => Identifier)),
    new ObjectProperty("typeParameters", false, proxy(() => NodeArray)),
    new ObjectProperty("heritageClauses", false, proxy(() => NodeArray)),
    new ObjectProperty("members", true, proxy(() => NodeArray)),
    ...commonNodeProperties,
    ...jsDocContainerProperties,
]);
export const InterfaceDeclaration = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_InterfaceDeclaration)),
    new ObjectProperty("name", true, proxy(() => Identifier)),
    new ObjectProperty("typeParameters", false, proxy(() => NodeArray)),
    new ObjectProperty("heritageClauses", false, proxy(() => NodeArray)),
    new ObjectProperty("members", true, proxy(() => NodeArray)),
    ...commonNodeProperties,
    ...jsDocContainerProperties,
]);
export const TypeLiteralNode = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_TypeLiteral)),
    new ObjectProperty("members", true, proxy(() => NodeArray)),
    ...commonNodeProperties,
]);
export const ObjectTypeDeclaration = new UnionType([

    proxy(() => ClassDeclaration),
    proxy(() => ClassExpression),
    proxy(() => InterfaceDeclaration),
    proxy(() => TypeLiteralNode)

]);
export const PropertySignature = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_PropertySignature)),
    new ObjectProperty("name", true, proxy(() => PropertyName)),
    new ObjectProperty("questionToken", false, proxy(() => Token_QuestionToken)),
    new ObjectProperty("type", false, proxy(() => TypeNode)),
    new ObjectProperty("initializer", false, proxy(() => Expression)),
    ...commonNodeProperties,
    ...jsDocContainerProperties,
]);
export const ArrowFunction = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ArrowFunction)),
    new ObjectProperty("equalsGreaterThanToken", true, proxy(() => Token_EqualsGreaterThanToken)),
    new ObjectProperty("body", true, proxy(() => ConciseBody)),
    ...commonNodeProperties,
    new ObjectProperty("asteriskToken", false, proxy(() => Token_AsteriskToken)),
    new ObjectProperty("questionToken", false, proxy(() => Token_QuestionToken)),
    new ObjectProperty("exclamationToken", false, proxy(() => Token_ExclamationToken)),
    new ObjectProperty("endFlowNode", false, proxy(() => FlowNode)),
    new ObjectProperty("typeParameters", false, proxy(() => NodeArray)),
    new ObjectProperty("parameters", true, proxy(() => NodeArray)),
    new ObjectProperty("type", false, proxy(() => TypeNode)),
    new ObjectProperty("typeArguments", false, proxy(() => NodeArray)),
    ...jsDocContainerProperties,
]);
export const Block = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_Block)),
    new ObjectProperty("statements", true, proxy(() => NodeArray)),
    new ObjectProperty("multiLine", false, proxy(() => booleanType)),
    ...commonNodeProperties,
]);
export const ConciseBody = new UnionType([

    proxy(() => Expression),
    proxy(() => Block)

]);
export const FlowNode = new ObjectType(Prototype.NodeObject, [
]);
export const ParenthesizedExpression = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ParenthesizedExpression)),
    new ObjectProperty("expression", true, proxy(() => Expression)),
    ...commonNodeProperties,
    ...jsDocContainerProperties,
]);
export const SpreadAssignment = new ObjectType(Prototype.NodeObject, [
    // new ObjectProperty("parent", true, proxy(() => ObjectLiteralExpression)),
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_SpreadAssignment)),
    new ObjectProperty("expression", true, proxy(() => Expression)),
    new ObjectProperty("name", false, proxy(() => PropertyName)),
    ...commonNodePropertiesSansParent,
    ...jsDocContainerProperties,
]);
export const ObjectLiteralExpression = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ObjectLiteralExpression)),
    new ObjectProperty("multiLine", false, proxy(() => booleanType)),
    new ObjectProperty("properties", true, proxy(() => NodeArray)),
    ...commonNodeProperties,
]);
export const ShorthandPropertyAssignment = new ObjectType(Prototype.NodeObject, [
    // new ObjectProperty("parent", true, proxy(() => ObjectLiteralExpression)),
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ShorthandPropertyAssignment)),
    new ObjectProperty("name", true, proxy(() => Identifier)),
    new ObjectProperty("questionToken", false, proxy(() => Token_QuestionToken)),
    new ObjectProperty("exclamationToken", false, proxy(() => Token_ExclamationToken)),
    new ObjectProperty("equalsToken", false, proxy(() => Token_EqualsToken)),
    new ObjectProperty("objectAssignmentInitializer", false, proxy(() => Expression)),
    ...commonNodePropertiesSansParent,
    ...jsDocContainerProperties,
]);
export const PropertyAssignment = new ObjectType(Prototype.NodeObject, [
    // new ObjectProperty("parent", true, proxy(() => ObjectLiteralExpression)),
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_PropertyAssignment)),
    new ObjectProperty("name", true, proxy(() => PropertyName)),
    new ObjectProperty("questionToken", false, proxy(() => Token_QuestionToken)),
    new ObjectProperty("initializer", true, proxy(() => Expression)),
    ...commonNodePropertiesSansParent,
    ...jsDocContainerProperties,
]);
export const FunctionExpression = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_FunctionExpression)),
    new ObjectProperty("name", false, proxy(() => Identifier)),
    new ObjectProperty("body", true, proxy(() => Block)),
    ...commonNodeProperties,
    new ObjectProperty("asteriskToken", false, proxy(() => Token_AsteriskToken)),
    new ObjectProperty("questionToken", false, proxy(() => Token_QuestionToken)),
    new ObjectProperty("exclamationToken", false, proxy(() => Token_ExclamationToken)),
    new ObjectProperty("endFlowNode", false, proxy(() => FlowNode)),
    new ObjectProperty("typeParameters", false, proxy(() => NodeArray)),
    new ObjectProperty("parameters", true, proxy(() => NodeArray)),
    new ObjectProperty("type", false, proxy(() => TypeNode)),
    new ObjectProperty("typeArguments", false, proxy(() => NodeArray)),
    ...jsDocContainerProperties,
]);
export const LabeledStatement = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_LabeledStatement)),
    new ObjectProperty("label", true, proxy(() => Identifier)),
    new ObjectProperty("statement", true, proxy(() => Statement)),
    ...commonNodeProperties,
    ...jsDocContainerProperties,
]);
export const Statement = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => numberType)),
    ...commonNodeProperties,
]);
export const ExpressionStatement = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ExpressionStatement)),
    new ObjectProperty("expression", true, proxy(() => Expression)),
    ...commonNodeProperties,
    ...jsDocContainerProperties,
]);
export const VariableStatement = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_VariableStatement)),
    new ObjectProperty("declarationList", true, proxy(() => VariableDeclarationList)),
    ...commonNodeProperties,
    ...jsDocContainerProperties,
]);
export const VariableDeclarationList = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_VariableDeclarationList)),
    // new ObjectProperty("parent", true, proxy(() => type164)),
    new ObjectProperty("declarations", true, proxy(() => NodeArray)),
    ...commonNodePropertiesSansParent,
]);
export const ForStatement = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ForStatement)),
    new ObjectProperty("initializer", false, proxy(() => ForInitializer)),
    new ObjectProperty("condition", false, proxy(() => Expression)),
    new ObjectProperty("incrementor", false, proxy(() => Expression)),
    new ObjectProperty("statement", true, proxy(() => Statement)),
    ...commonNodeProperties,
]);
export const ForInitializer = new UnionType([
    proxy(() => Expression),
    proxy(() => VariableDeclarationList)
]);
export const ForInStatement = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ForInStatement)),
    new ObjectProperty("initializer", true, proxy(() => ForInitializer)),
    new ObjectProperty("expression", true, proxy(() => Expression)),
    new ObjectProperty("statement", true, proxy(() => Statement)),
    ...commonNodeProperties,
]);
export const ForOfStatement = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ForOfStatement)),
    new ObjectProperty("awaitModifier", false, proxy(() => Token_AwaitKeyword)),
    new ObjectProperty("initializer", true, proxy(() => ForInitializer)),
    new ObjectProperty("expression", true, proxy(() => Expression)),
    new ObjectProperty("statement", true, proxy(() => Statement)),
    ...commonNodeProperties,
]);
export const type164 = new UnionType([
    proxy(() => VariableStatement),
    proxy(() => ForStatement),
    proxy(() => ForInStatement),
    proxy(() => ForOfStatement)
]);
export const FunctionDeclaration = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_FunctionDeclaration)),
    new ObjectProperty("name", false, proxy(() => Identifier)),
    new ObjectProperty("body", false, proxy(() => Block)),
    new ObjectProperty("asteriskToken", false, proxy(() => Token_AsteriskToken)),
    new ObjectProperty("questionToken", false, proxy(() => Token_QuestionToken)),
    new ObjectProperty("exclamationToken", false, proxy(() => Token_ExclamationToken)),
    new ObjectProperty("endFlowNode", false, proxy(() => FlowNode)),
    new ObjectProperty("typeParameters", false, proxy(() => NodeArray)),
    new ObjectProperty("parameters", true, proxy(() => NodeArray)),
    new ObjectProperty("type", false, proxy(() => TypeNode)),
    new ObjectProperty("typeArguments", false, proxy(() => NodeArray)),
    ...commonNodeProperties,
    ...jsDocContainerProperties,
]);
export const ConstructorDeclaration = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_Constructor)),
    // new ObjectProperty("parent", true, proxy(() => ClassLikeDeclaration)),
    new ObjectProperty("body", false, proxy(() => Block)),
    new ObjectProperty("returnFlowNode", false, proxy(() => FlowNode)),
    new ObjectProperty("asteriskToken", false, proxy(() => Token_AsteriskToken)),
    new ObjectProperty("questionToken", false, proxy(() => Token_QuestionToken)),
    new ObjectProperty("exclamationToken", false, proxy(() => Token_ExclamationToken)),
    new ObjectProperty("endFlowNode", false, proxy(() => FlowNode)),
    new ObjectProperty("name", false, proxy(() => PropertyName)),
    new ObjectProperty("typeParameters", false, proxy(() => NodeArray)),
    new ObjectProperty("parameters", true, proxy(() => NodeArray)),
    new ObjectProperty("type", false, proxy(() => TypeNode)),
    new ObjectProperty("typeArguments", false, proxy(() => NodeArray)),
    ...commonNodePropertiesSansParent,
    ...jsDocContainerProperties,
]);
export const ClassLikeDeclaration = new UnionType([

    proxy(() => ClassDeclaration),
    proxy(() => ClassExpression)

]);
export const MethodDeclaration = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_MethodDeclaration)),
    // new ObjectProperty("parent", true, proxy(() => type178)),
    new ObjectProperty("name", true, proxy(() => PropertyName)),
    new ObjectProperty("body", false, proxy(() => Block)),
    new ObjectProperty("asteriskToken", false, proxy(() => Token_AsteriskToken)),
    new ObjectProperty("questionToken", false, proxy(() => Token_QuestionToken)),
    new ObjectProperty("exclamationToken", false, proxy(() => Token_ExclamationToken)),
    new ObjectProperty("endFlowNode", false, proxy(() => FlowNode)),
    new ObjectProperty("typeParameters", false, proxy(() => NodeArray)),
    new ObjectProperty("parameters", true, proxy(() => NodeArray)),
    new ObjectProperty("type", false, proxy(() => TypeNode)),
    new ObjectProperty("typeArguments", false, proxy(() => NodeArray)),
    ...commonNodePropertiesSansParent,
    ...jsDocContainerProperties,
]);
export const type178 = new UnionType([

    proxy(() => ClassDeclaration),
    proxy(() => ClassExpression),
    proxy(() => ObjectLiteralExpression)

]);
export const PropertyDeclaration = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_PropertyDeclaration)),
    // new ObjectProperty("parent", true, proxy(() => ClassLikeDeclaration)),
    new ObjectProperty("name", true, proxy(() => PropertyName)),
    new ObjectProperty("questionToken", false, proxy(() => Token_QuestionToken)),
    new ObjectProperty("exclamationToken", false, proxy(() => Token_ExclamationToken)),
    new ObjectProperty("type", false, proxy(() => TypeNode)),
    new ObjectProperty("initializer", false, proxy(() => Expression)),
    ...commonNodePropertiesSansParent,
    ...jsDocContainerProperties,
]);
export const GetAccessorDeclaration = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_GetAccessor)),
    // new ObjectProperty("parent", true, proxy(() => type187)),
    new ObjectProperty("name", true, proxy(() => PropertyName)),
    new ObjectProperty("body", false, proxy(() => Block)),
    new ObjectProperty("asteriskToken", false, proxy(() => Token_AsteriskToken)),
    new ObjectProperty("questionToken", false, proxy(() => Token_QuestionToken)),
    new ObjectProperty("exclamationToken", false, proxy(() => Token_ExclamationToken)),
    new ObjectProperty("endFlowNode", false, proxy(() => FlowNode)),
    new ObjectProperty("typeParameters", false, proxy(() => NodeArray)),
    new ObjectProperty("parameters", true, proxy(() => NodeArray)),
    new ObjectProperty("type", false, proxy(() => TypeNode)),
    new ObjectProperty("typeArguments", false, proxy(() => NodeArray)),
    ...commonNodePropertiesSansParent,
    ...jsDocContainerProperties,
]);
export const type187 = new UnionType([
    proxy(() => ClassDeclaration),
    proxy(() => ClassExpression),
    proxy(() => ObjectLiteralExpression)
]);
export const SetAccessorDeclaration = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_SetAccessor)),
    // new ObjectProperty("parent", true, proxy(() => type192)),
    new ObjectProperty("name", true, proxy(() => PropertyName)),
    new ObjectProperty("body", false, proxy(() => Block)),
    new ObjectProperty("asteriskToken", false, proxy(() => Token_AsteriskToken)),
    new ObjectProperty("questionToken", false, proxy(() => Token_QuestionToken)),
    new ObjectProperty("exclamationToken", false, proxy(() => Token_ExclamationToken)),
    new ObjectProperty("endFlowNode", false, proxy(() => FlowNode)),
    new ObjectProperty("typeParameters", false, proxy(() => NodeArray)),
    new ObjectProperty("parameters", true, proxy(() => NodeArray)),
    new ObjectProperty("type", false, proxy(() => TypeNode)),
    new ObjectProperty("typeArguments", false, proxy(() => NodeArray)),
    ...commonNodePropertiesSansParent,
    ...jsDocContainerProperties,
]);
export const type192 = new UnionType([
    proxy(() => ClassDeclaration),
    proxy(() => ClassExpression),
    proxy(() => ObjectLiteralExpression)
]);
export const TypeAliasDeclaration = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_TypeAliasDeclaration)),
    new ObjectProperty("name", true, proxy(() => Identifier)),
    new ObjectProperty("typeParameters", false, proxy(() => NodeArray)),
    new ObjectProperty("type", true, proxy(() => TypeNode)),
    ...commonNodeProperties,
    ...jsDocContainerProperties,
]);
export const EnumMember = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_EnumMember)),
    // new ObjectProperty("parent", true, proxy(() => EnumDeclaration)),
    new ObjectProperty("name", true, proxy(() => PropertyName)),
    new ObjectProperty("initializer", false, proxy(() => Expression)),
    ...commonNodePropertiesSansParent,
    ...jsDocContainerProperties,
]);
export const EnumDeclaration = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_EnumDeclaration)),
    new ObjectProperty("name", true, proxy(() => Identifier)),
    new ObjectProperty("members", true, proxy(() => NodeArray)),
    ...commonNodeProperties,
    ...jsDocContainerProperties,
]);
export const ModuleDeclaration = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ModuleDeclaration)),
    // new ObjectProperty("parent", true, proxy(() => ModuleOrNamespaceDeclarationParent)),
    new ObjectProperty("name", true, proxy(() => ModuleName)),
    new ObjectProperty("body", false, proxy(() => ModuleDeclaration_Body)),
    ...commonNodePropertiesSansParent,
    ...jsDocContainerProperties,
]);
export const SourceFile = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_SourceFile)),
    new ObjectProperty("statements", true, proxy(() => NodeArray)),
    new ObjectProperty("endOfFileToken", true, proxy(() => Token_EndOfFileToken_old)),
    new ObjectProperty("fileName", true, proxy(() => stringType)),
    new ObjectProperty("path", true, proxy(() => Path)),
    new ObjectProperty("text", true, proxy(() => stringType)),
    new ObjectProperty("resolvedPath", true, proxy(() => Path)),
    new ObjectProperty("originalFileName", true, proxy(() => stringType)),
    new ObjectProperty("redirectInfo", false, proxy(() => RedirectInfo)),
    new ObjectProperty("amdDependencies", true, proxy(() => Array_AmdDependency)),
    new ObjectProperty("moduleName", false, proxy(() => stringType)),
    new ObjectProperty("referencedFiles", true, proxy(() => Array_FileReference)),
    new ObjectProperty("typeReferenceDirectives", true, proxy(() => Array_FileReference)),
    new ObjectProperty("libReferenceDirectives", true, proxy(() => Array_FileReference)),
    new ObjectProperty("languageVariant", true, proxy(() => numberType)),
    new ObjectProperty("isDeclarationFile", true, proxy(() => booleanType)),
    new ObjectProperty("renamedDependencies", false, proxy(() => ReadonlyMap_string_)),
    new ObjectProperty("hasNoDefaultLib", true, proxy(() => booleanType)),
    new ObjectProperty("languageVersion", true, proxy(() => numberType)),
    new ObjectProperty("scriptKind", true, proxy(() => numberType)),
    new ObjectProperty("externalModuleIndicator", false, proxy(() => Node)),
    new ObjectProperty("commonJsModuleIndicator", false, proxy(() => Node)),
    new ObjectProperty("jsGlobalAugmentations", false, proxy(() => SymbolTable)),
    new ObjectProperty("identifiers", true, proxy(() => Map)),
    new ObjectProperty("nodeCount", true, proxy(() => numberType)),
    new ObjectProperty("identifierCount", true, proxy(() => numberType)),
    new ObjectProperty("symbolCount", true, proxy(() => numberType)),
    new ObjectProperty("parseDiagnostics", true, proxy(() => Array_DiagnosticWithLocation)),
    new ObjectProperty("bindDiagnostics", true, proxy(() => Array_DiagnosticWithLocation)),
    new ObjectProperty("bindSuggestionDiagnostics", false, proxy(() => Array_DiagnosticWithLocation)),
    new ObjectProperty("jsDocDiagnostics", false, proxy(() => Array_DiagnosticWithLocation)),
    new ObjectProperty("additionalSyntacticDiagnostics", false, proxy(() => Array_DiagnosticWithLocation)),
    new ObjectProperty("lineMap", true, proxy(() => Array_Number)),
    new ObjectProperty("checkJsDirective", false, proxy(() => CheckJsDirective)),
    new ObjectProperty("version", true, proxy(() => stringType)),
    new ObjectProperty("pragmas", true, proxy(() => ReadonlyPragmaMap)),
    new ObjectProperty("localJsxNamespace", false, proxy(() => stringType)),
    new ObjectProperty("localJsxFactory", false, proxy(() => EntityName)),
    ...commonNodeProperties,
]);
export const Path = stringType;
export const RedirectInfo = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("redirectTarget", true, proxy(() => SourceFile)),
    new ObjectProperty("unredirected", true, proxy(() => SourceFile)),
]);
export const Array_AmdDependency = new ArrayType(proxy(() => AmdDependency), []);
export const AmdDependency = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("path", true, proxy(() => stringType)),
    new ObjectProperty("name", false, proxy(() => stringType)),
]);
export const Array_FileReference = new ArrayType(proxy(() => FileReference), []);
export const FileReference = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("fileName", true, proxy(() => stringType)),
    new ObjectProperty("pos", true, proxy(() => numberType)),
    new ObjectProperty("end", true, proxy(() => numberType)),
]);
export const ReadonlyMap_string_ = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("size", true, proxy(() => numberType)),
]);
export const SymbolTable = new ObjectType(Prototype.NodeObject, [
]);
export const Map = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("size", true, proxy(() => numberType)),
]);
export const DiagnosticWithLocation = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("file", true, proxy(() => SourceFile)),
    new ObjectProperty("start", true, proxy(() => numberType)),
    new ObjectProperty("length", true, proxy(() => numberType)),
    new ObjectProperty("reportsUnnecessary", false, proxy(() => type227)),
    new ObjectProperty("source", false, proxy(() => stringType)),
    new ObjectProperty("relatedInformation", false, proxy(() => Array_DiagnosticRelatedInformation)),
    new ObjectProperty("category", true, proxy(() => numberType)),
    new ObjectProperty("code", true, proxy(() => numberType)),
    new ObjectProperty("messageText", true, proxy(() => type233)),
]);
export const type227 = new ObjectType(Prototype.NodeObject, [
]);
export const Array_DiagnosticRelatedInformation = new ArrayType(proxy(() => DiagnosticRelatedInformation), []);
export const DiagnosticRelatedInformation = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("category", true, proxy(() => numberType)),
    new ObjectProperty("code", true, proxy(() => numberType)),
    new ObjectProperty("file", false, proxy(() => SourceFile)),
    new ObjectProperty("start", false, proxy(() => numberType)),
    new ObjectProperty("length", false, proxy(() => numberType)),
    new ObjectProperty("messageText", true, proxy(() => type232)),
]);
export const DiagnosticMessageChain = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("messageText", true, proxy(() => stringType)),
    new ObjectProperty("category", true, proxy(() => numberType)),
    new ObjectProperty("code", true, proxy(() => numberType)),
    new ObjectProperty("next", false, proxy(() => Array_DiagnosticMessageChain)),
]);
export const Array_DiagnosticMessageChain = new ArrayType(proxy(() => DiagnosticMessageChain), []);
export const type232 = new UnionType([
    proxy(() => DiagnosticMessageChain),
    proxy(() => stringType)
]);
export const type233 = new UnionType([
    proxy(() => DiagnosticMessageChain),
    proxy(() => stringType)
]);
export const Array_DiagnosticWithLocation = new ArrayType(proxy(() => DiagnosticWithLocation), []);
export const Array_Number = new ArrayType(proxy(() => numberType), []);
export const CheckJsDirective = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("enabled", true, proxy(() => booleanType)),
    new ObjectProperty("pos", true, proxy(() => numberType)),
    new ObjectProperty("end", true, proxy(() => numberType)),
]);
export const ReadonlyPragmaMap = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("size", true, proxy(() => numberType)),
]);
export const ModuleBlock = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ModuleBlock)),
    // new ObjectProperty("parent", true, proxy(() => ModuleDeclaration)),
    new ObjectProperty("statements", true, proxy(() => NodeArray)),
    ...commonNodePropertiesSansParent,
]);
export const NamespaceBody = new UnionType([
    proxy(() => ModuleBlock),
    proxy(() => NamespaceDeclaration),
    proxy(() => Identifier),
    // proxy(() => JSDocNamespaceDeclaration)
]);
const JSDocNamespaceBody = NamespaceBody;
// export const NamespaceBody = new UnionType([
//     proxy(() => ModuleBlock),
//     proxy(() => NamespaceDeclaration)
// ]);
// export const JSDocNamespaceBody = new UnionType([
//     proxy(() => Identifier),
//     proxy(() => JSDocNamespaceDeclaration)
// ]);
export const NamespaceDeclaration = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("name", true, proxy(() => Identifier)),
    new ObjectProperty("body", true, proxy(() => NamespaceBody)),
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ModuleDeclaration)),
    // new ObjectProperty("parent", true, proxy(() => ModuleOrNamespaceDeclarationParent)),
    ...commonNodePropertiesSansParent,
    ...jsDocContainerProperties,
]);
const JSDocNamespaceDeclaration = NamespaceDeclaration;
// export const NamespaceDeclaration = new ObjectType(Prototype.NodeObject, [
//     new ObjectProperty("name", true, proxy(() => Identifier)),
//     new ObjectProperty("body", true, proxy(() => NamespaceBody)),
//     new ObjectProperty("kind", true, proxy(() => SyntaxKind_ModuleDeclaration)),
// //     new ObjectProperty("parent", true, proxy(() => ModuleOrNamespaceDeclarationParent)),
//     ...commonNodePropertiesSansParent,
//     ...jsDocContainerProperties,
// ]);
// export const JSDocNamespaceDeclaration = new ObjectType(Prototype.NodeObject, [
//     new ObjectProperty("name", true, proxy(() => Identifier)),
//     new ObjectProperty("body", false, proxy(() => JSDocNamespaceBody)),
//     new ObjectProperty("kind", true, proxy(() => SyntaxKind_ModuleDeclaration)),
// //     new ObjectProperty("parent", true, proxy(() => ModuleOrNamespaceDeclarationParent)),
//     ...commonNodePropertiesSansParent,
//     ...jsDocContainerProperties,
// ]);
const ModuleOrNamespaceDeclarationParent = stringType;
/*HACK commented out because this type is only used for a `parent` field, which won't be marshalled anyway.
new UnionType([
    proxy(() => Identifier),
    proxy(() => SourceFile),
    proxy(() => ModuleBlock),
    proxy(() => NamespaceDeclaration),
    proxy(() => JSDocNamespaceDeclaration)
]);*/
export const ModuleName = new UnionType([
    proxy(() => Identifier),
    proxy(() => StringLiteral)
]);
export const ModuleDeclaration_Body = new UnionType([
    proxy(() => Identifier),
    proxy(() => ModuleBlock),
    proxy(() => NamespaceDeclaration),
    // proxy(() => JSDocNamespaceDeclaration)
]);
export const ImportEqualsDeclaration = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ImportEqualsDeclaration)),
    // new ObjectProperty("parent", true, proxy(() => type260)),
    new ObjectProperty("name", true, proxy(() => Identifier)),
    new ObjectProperty("moduleReference", true, proxy(() => ModuleReference)),
    ...commonNodePropertiesSansParent,
    ...jsDocContainerProperties,
]);
export const type260 = new UnionType([
    proxy(() => SourceFile),
    proxy(() => ModuleBlock)
]);
export const ExternalModuleReference = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ExternalModuleReference)),
    // new ObjectProperty("parent", true, proxy(() => ImportEqualsDeclaration)),
    new ObjectProperty("expression", true, proxy(() => Expression)),
    ...commonNodePropertiesSansParent,
]);
export const ModuleReference = new UnionType([
    proxy(() => Identifier),
    proxy(() => QualifiedName),
    proxy(() => ExternalModuleReference)
]);
export const IndexSignatureDeclaration = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_IndexSignature)),
    // new ObjectProperty("parent", true, proxy(() => ObjectTypeDeclaration)),
    new ObjectProperty("name", false, proxy(() => PropertyName)),
    new ObjectProperty("typeParameters", false, proxy(() => NodeArray)),
    new ObjectProperty("parameters", true, proxy(() => NodeArray)),
    new ObjectProperty("type", false, proxy(() => TypeNode)),
    new ObjectProperty("typeArguments", false, proxy(() => NodeArray)),
    ...commonNodePropertiesSansParent,
    ...jsDocContainerProperties,
    new ObjectProperty("questionToken", false, proxy(() => Token_QuestionToken)),
]);
export const FunctionTypeNode = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_FunctionType)),
    new ObjectProperty("type", true, proxy(() => TypeNode)),
    ...commonNodeProperties,
    new ObjectProperty("name", false, proxy(() => PropertyName)),
    new ObjectProperty("typeParameters", false, proxy(() => NodeArray)),
    new ObjectProperty("parameters", true, proxy(() => NodeArray)),
    new ObjectProperty("typeArguments", false, proxy(() => NodeArray)),
    ...jsDocContainerProperties,
]);
export const ConstructorTypeNode = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ConstructorType)),
    new ObjectProperty("type", true, proxy(() => TypeNode)),
    ...commonNodeProperties,
    new ObjectProperty("name", false, proxy(() => PropertyName)),
    new ObjectProperty("typeParameters", false, proxy(() => NodeArray)),
    new ObjectProperty("parameters", true, proxy(() => NodeArray)),
    new ObjectProperty("typeArguments", false, proxy(() => NodeArray)),
    ...jsDocContainerProperties,
]);
export const JSDocFunctionType = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocFunctionType)),
    ...commonNodeProperties,
    new ObjectProperty("name", false, proxy(() => PropertyName)),
    new ObjectProperty("typeParameters", false, proxy(() => NodeArray)),
    new ObjectProperty("parameters", true, proxy(() => NodeArray)),
    new ObjectProperty("type", false, proxy(() => TypeNode)),
    new ObjectProperty("typeArguments", false, proxy(() => NodeArray)),
    ...jsDocContainerProperties,
]);
export const ExportDeclaration = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ExportDeclaration)),
    // new ObjectProperty("parent", true, proxy(() => type284)),
    new ObjectProperty("isTypeOnly", true, proxy(() => booleanType)),
    new ObjectProperty("exportClause", false, proxy(() => NamedExportBindings)),
    new ObjectProperty("moduleSpecifier", false, proxy(() => Expression)),
    new ObjectProperty("name", false, proxy(() => type290)),
    ...commonNodePropertiesSansParent,
    ...jsDocContainerProperties,
]);
export const type284 = new UnionType([
    proxy(() => SourceFile),
    proxy(() => ModuleBlock)
]);
export const NamespaceExport = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_NamespaceExport)),
    // new ObjectProperty("parent", true, proxy(() => ExportDeclaration)),
    new ObjectProperty("name", true, proxy(() => Identifier)),
    ...commonNodePropertiesSansParent,
]);
export const NamedExports = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_NamedExports)),
    // new ObjectProperty("parent", true, proxy(() => ExportDeclaration)),
    new ObjectProperty("elements", true, proxy(() => NodeArray)),
    ...commonNodePropertiesSansParent,
]);
export const NamedExportBindings = new UnionType([
    proxy(() => NamespaceExport),
    proxy(() => NamedExports)
]);
export const type290 = new UnionType([
    proxy(() => Identifier),
    proxy(() => StringLiteral),
    proxy(() => NumericLiteral)
]);
export const JSDocContainer = new ObjectType(Prototype.NodeObject, [
    ...jsDocContainerProperties,
]);
export const HasJSDoc = new UnionType([
    proxy(() => ParameterDeclaration),
    proxy(() => CallSignatureDeclaration),
    proxy(() => ConstructSignatureDeclaration),
    proxy(() => MethodSignature),
    proxy(() => PropertySignature),
    proxy(() => ArrowFunction),
    proxy(() => ParenthesizedExpression),
    proxy(() => SpreadAssignment),
    proxy(() => ShorthandPropertyAssignment),
    proxy(() => PropertyAssignment),
    proxy(() => FunctionExpression),
    proxy(() => LabeledStatement),
    proxy(() => ExpressionStatement),
    proxy(() => VariableStatement),
    proxy(() => FunctionDeclaration),
    proxy(() => ConstructorDeclaration),
    proxy(() => MethodDeclaration),
    proxy(() => PropertyDeclaration),
    proxy(() => GetAccessorDeclaration),
    proxy(() => SetAccessorDeclaration),
    proxy(() => ClassDeclaration),
    proxy(() => ClassExpression),
    proxy(() => InterfaceDeclaration),
    proxy(() => TypeAliasDeclaration),
    proxy(() => EnumMember),
    proxy(() => EnumDeclaration),
    proxy(() => ModuleDeclaration),
    proxy(() => ImportEqualsDeclaration),
    proxy(() => IndexSignatureDeclaration),
    proxy(() => FunctionTypeNode),
    proxy(() => ConstructorTypeNode),
    proxy(() => JSDocFunctionType),
    proxy(() => ExportDeclaration),
    proxy(() => Token_EndOfFileToken)
]);
export const SignatureDeclaration = new UnionType([
    proxy(() => CallSignatureDeclaration),
    proxy(() => ConstructSignatureDeclaration),
    proxy(() => MethodSignature),
    proxy(() => ArrowFunction),
    proxy(() => FunctionExpression),
    proxy(() => FunctionDeclaration),
    proxy(() => ConstructorDeclaration),
    proxy(() => MethodDeclaration),
    proxy(() => GetAccessorDeclaration),
    proxy(() => SetAccessorDeclaration),
    proxy(() => IndexSignatureDeclaration),
    proxy(() => FunctionTypeNode),
    proxy(() => ConstructorTypeNode),
    proxy(() => JSDocFunctionType)
]);
export const ArrayBindingPattern = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ArrayBindingPattern)),
    // new ObjectProperty("parent", true, proxy(() => type315)),
    new ObjectProperty("elements", true, proxy(() => NodeArray)),
    ...commonNodePropertiesSansParent,
]);
export const VariableDeclaration = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_VariableDeclaration)),
    // new ObjectProperty("parent", true, proxy(() => type311)),
    new ObjectProperty("name", true, proxy(() => BindingName)),
    new ObjectProperty("exclamationToken", false, proxy(() => Token_ExclamationToken)),
    new ObjectProperty("type", false, proxy(() => TypeNode)),
    new ObjectProperty("initializer", false, proxy(() => Expression)),
    ...commonNodePropertiesSansParent,
]);
export const CatchClause = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_CatchClause)),
    // new ObjectProperty("parent", true, proxy(() => TryStatement)),
    new ObjectProperty("variableDeclaration", false, proxy(() => VariableDeclaration)),
    new ObjectProperty("block", true, proxy(() => Block)),
    ...commonNodePropertiesSansParent,
]);
export const TryStatement = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_TryStatement)),
    new ObjectProperty("tryBlock", true, proxy(() => Block)),
    new ObjectProperty("catchClause", false, proxy(() => CatchClause)),
    new ObjectProperty("finallyBlock", false, proxy(() => Block)),
    ...commonNodeProperties,
]);
export const type311 = new UnionType([
    proxy(() => VariableDeclarationList),
    proxy(() => CatchClause)
]);
export const BindingElement = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_BindingElement)),
    // new ObjectProperty("parent", true, proxy(() => BindingPattern)),
    new ObjectProperty("propertyName", false, proxy(() => PropertyName)),
    new ObjectProperty("dotDotDotToken", false, proxy(() => Token_DotDotDotToken)),
    new ObjectProperty("name", true, proxy(() => BindingName)),
    new ObjectProperty("initializer", false, proxy(() => Expression)),
    ...commonNodePropertiesSansParent,
]);
export const BindingPattern = new UnionType([
    proxy(() => ObjectBindingPattern),
    proxy(() => ArrayBindingPattern)
]);
export const type315 = new UnionType([
    proxy(() => ParameterDeclaration),
    proxy(() => VariableDeclaration),
    proxy(() => BindingElement)
]);
export const BindingName = new UnionType([
    proxy(() => Identifier),
    proxy(() => ObjectBindingPattern),
    proxy(() => ArrayBindingPattern)
]);
export const ObjectBindingPattern_Parent = new UnionType([
    proxy(() => ParameterDeclaration),
    proxy(() => VariableDeclaration),
    proxy(() => BindingElement)
]);
export const PropertyAccessEntityNameExpression = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("expression", true, proxy(() => EntityNameExpression)),
    new ObjectProperty("name", true, proxy(() => Identifier)),
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_PropertyAccessExpression)),
    new ObjectProperty("questionDotToken", false, proxy(() => Token_QuestionDotToken)),
    ...commonNodeProperties,
]);
export const EntityNameExpression = new UnionType([
    proxy(() => Identifier),
    proxy(() => PropertyAccessEntityNameExpression)
]);
export const DeclarationName = new UnionType([
    proxy(() => Identifier),
    proxy(() => StringLiteral),
    proxy(() => NumericLiteral),
    proxy(() => ComputedPropertyName),
    proxy(() => PrivateIdentifier),
    proxy(() => NoSubstitutionTemplateLiteral),
    proxy(() => ElementAccessExpression),
    proxy(() => ObjectBindingPattern),
    proxy(() => ArrayBindingPattern),
    proxy(() => PropertyAccessEntityNameExpression)
]);
export const TypeParameterDeclaration = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_TypeParameter)),
    // new ObjectProperty("parent", true, proxy(() => TypeParameterDeclaration_Parent)),
    new ObjectProperty("name", true, proxy(() => Identifier)),
    new ObjectProperty("constraint", false, proxy(() => TypeNode)),
    new ObjectProperty("default", false, proxy(() => TypeNode)),
    new ObjectProperty("expression", false, proxy(() => Expression)),
    ...commonNodePropertiesSansParent,
]);
export const InferTypeNode = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_InferType)),
    new ObjectProperty("typeParameter", true, proxy(() => TypeParameterDeclaration)),
    ...commonNodeProperties,
]);
export const JSDocTemplateTag = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocTemplateTag)),
    new ObjectProperty("constraint", false, proxy(() => JSDocTypeExpression)),
    new ObjectProperty("typeParameters", true, proxy(() => NodeArray)),
    // new ObjectProperty("parent", true, proxy(() => JSDocOrJSDocTypeLiteral)),
    new ObjectProperty("tagName", true, proxy(() => Identifier)),
    new ObjectProperty("comment", false, proxy(() => stringType)),
    ...commonNodePropertiesSansParent,
]);
export const JSDocOrJSDocTypeLiteral = new UnionType([
    proxy(() => JSDoc),
    proxy(() => JSDocTypeLiteral)
]);
export const TypeParameterDeclaration_Parent = new UnionType([
    proxy(() => CallSignatureDeclaration),
    proxy(() => ConstructSignatureDeclaration),
    proxy(() => MethodSignature),
    proxy(() => ArrowFunction),
    proxy(() => FunctionExpression),
    proxy(() => FunctionDeclaration),
    proxy(() => ConstructorDeclaration),
    proxy(() => MethodDeclaration),
    proxy(() => GetAccessorDeclaration),
    proxy(() => SetAccessorDeclaration),
    proxy(() => ClassDeclaration),
    proxy(() => ClassExpression),
    proxy(() => InterfaceDeclaration),
    proxy(() => TypeAliasDeclaration),
    proxy(() => IndexSignatureDeclaration),
    proxy(() => FunctionTypeNode),
    proxy(() => ConstructorTypeNode),
    proxy(() => JSDocFunctionType),
    proxy(() => InferTypeNode),
    proxy(() => JSDocTemplateTag)
]);
export const HeritageClause = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_HeritageClause)),
    // new ObjectProperty("parent", true, proxy(() => HeritageClause_Parent)),
    new ObjectProperty("token", true, proxy(() => numberType)),
    new ObjectProperty("types", true, proxy(() => NodeArray)),
    ...commonNodePropertiesSansParent,
]);
export const HeritageClause_Parent = new UnionType([
    proxy(() => ClassDeclaration),
    proxy(() => ClassExpression),
    proxy(() => InterfaceDeclaration)
]);
export const ClassElement = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("name", false, proxy(() => PropertyName)),
    new ObjectProperty("kind", true, proxy(() => numberType)),
    ...commonNodeProperties,
]);
export const TypeElement = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("name", false, proxy(() => PropertyName)),
    new ObjectProperty("questionToken", false, proxy(() => Token_QuestionToken)),
    new ObjectProperty("kind", true, proxy(() => numberType)),
    ...commonNodeProperties,
]);
export const ExpressionWithTypeArguments = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ExpressionWithTypeArguments)),
    // new ObjectProperty("parent", true, proxy(() => ExpressionWithTypeArguments_Parent)),
    new ObjectProperty("expression", true, proxy(() => LeftHandSideExpression)),
    new ObjectProperty("typeArguments", false, proxy(() => NodeArray)),
    ...commonNodePropertiesSansParent,
]);
export const JSDocAugmentsTag = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocAugmentsTag)),
    new ObjectProperty("class", true, proxy(() => JSDocAugmentsTag_Class)),
    // new ObjectProperty("parent", true, proxy(() => JSDocOrJSDocTypeLiteral)),
    new ObjectProperty("tagName", true, proxy(() => Identifier)),
    new ObjectProperty("comment", false, proxy(() => stringType)),
    ...commonNodePropertiesSansParent,
]);
export const JSDocAugmentsTag_Class_Expression = new UnionType([
    proxy(() => Identifier),
    proxy(() => PropertyAccessEntityNameExpression)
]);
export const JSDocAugmentsTag_Class = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ExpressionWithTypeArguments)),
    // new ObjectProperty("parent", true, proxy(() => ExpressionWithTypeArguments_Parent)),
    new ObjectProperty("expression", true, proxy(() => JSDocAugmentsTag_Class_Expression)),
    new ObjectProperty("typeArguments", false, proxy(() => NodeArray)),
    ...commonNodePropertiesSansParent
]);
export const ExpressionWithTypeArguments_Parent = new UnionType([
    proxy(() => HeritageClause),
    proxy(() => JSDocAugmentsTag)
]);
export const OmittedExpression = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_OmittedExpression)),
    ...commonNodeProperties,
]);
export const ExportSpecifier = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ExportSpecifier)),
    // new ObjectProperty("parent", true, proxy(() => NamedExports)),
    new ObjectProperty("propertyName", false, proxy(() => Identifier)),
    new ObjectProperty("name", true, proxy(() => Identifier)),
    ...commonNodePropertiesSansParent,
]);
export const StringLiteralLike = new UnionType([
    proxy(() => StringLiteral),
    proxy(() => NoSubstitutionTemplateLiteral)
]);
export const PartiallyEmittedExpression = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_PartiallyEmittedExpression)),
    new ObjectProperty("expression", true, proxy(() => Expression)),
    ...commonNodeProperties,
]);
export const UnaryExpression = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => numberType)),
    ...commonNodeProperties,
]);
export const UpdateExpression = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => numberType)),
    ...commonNodeProperties,
]);
export const PrefixUnaryExpression = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_PrefixUnaryExpression)),
    new ObjectProperty("operator", true, proxy(() => numberType)),
    new ObjectProperty("operand", true, proxy(() => UnaryExpression)),
    ...commonNodeProperties,
]);
export const PostfixUnaryExpression = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_PostfixUnaryExpression)),
    new ObjectProperty("operand", true, proxy(() => LeftHandSideExpression)),
    new ObjectProperty("operator", true, proxy(() => numberType)),
    ...commonNodeProperties,
]);
export const MemberExpression = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => numberType)),
    ...commonNodeProperties,
]);
export const PrimaryExpression = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => numberType)),
    ...commonNodeProperties,
]);
export const NullLiteral = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_NullKeyword)),
    ...commonNodeProperties,
]);
export const BooleanLiteral = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => numberType)),
    ...commonNodeProperties,
]);
export const ThisExpression = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ThisKeyword)),
    ...commonNodeProperties,
]);
export const SuperExpression = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_SuperKeyword)),
    ...commonNodeProperties,
]);
export const ImportExpression = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ImportKeyword)),
    ...commonNodeProperties,
]);
export const DeleteExpression = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_DeleteExpression)),
    new ObjectProperty("expression", true, proxy(() => UnaryExpression)),
    ...commonNodeProperties,
]);
export const TypeOfExpression = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_TypeOfExpression)),
    new ObjectProperty("expression", true, proxy(() => UnaryExpression)),
    ...commonNodeProperties,
]);
export const VoidExpression = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_VoidExpression)),
    new ObjectProperty("expression", true, proxy(() => UnaryExpression)),
    ...commonNodeProperties,
]);
export const AwaitExpression = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_AwaitExpression)),
    new ObjectProperty("expression", true, proxy(() => UnaryExpression)),
    ...commonNodeProperties,
]);
export const YieldExpression = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_YieldExpression)),
    new ObjectProperty("asteriskToken", false, proxy(() => Token_AsteriskToken)),
    new ObjectProperty("expression", false, proxy(() => Expression)),
    ...commonNodeProperties,
]);
export const SyntheticExpression = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_SyntheticExpression)),
    new ObjectProperty("isSpread", true, proxy(() => booleanType)),
    new ObjectProperty("type", true, proxy(() => __type)),
    ...commonNodeProperties,
]);
export const __type = new ObjectType(Prototype.NodeObject, [
]);
export const OperatorToken = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => numberType)),
    ...commonNodeProperties,
]);
export const BinaryExpression = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_BinaryExpression)),
    new ObjectProperty("left", true, proxy(() => Expression)),
    new ObjectProperty("operatorToken", true, proxy(() => OperatorToken)),
    new ObjectProperty("right", true, proxy(() => Expression)),
    ...commonNodeProperties,
]);
export const AssignmentOperatorToken = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => numberType)),
    ...commonNodeProperties,
]);
const ObjectDestructuringAssignment = BinaryExpression;
// export const ObjectDestructuringAssignment = new ObjectType(Prototype.NodeObject, [
//     new ObjectProperty("left", true, proxy(() => ObjectLiteralExpression)),
//     new ObjectProperty("operatorToken", true, proxy(() => Token_EqualsToken)),
//     new ObjectProperty("kind", true, proxy(() => SyntaxKind_BinaryExpression)),
//     new ObjectProperty("right", true, proxy(() => Expression)),
//     ...commonNodeProperties,
// ]);
const ArrayDestructuringAssignment = BinaryExpression;
// export const ArrayDestructuringAssignment = new ObjectType(Prototype.NodeObject, [
//     new ObjectProperty("left", true, proxy(() => ArrayLiteralExpression)),
//     new ObjectProperty("operatorToken", true, proxy(() => Token_EqualsToken)),
//     new ObjectProperty("kind", true, proxy(() => SyntaxKind_BinaryExpression)),
//     new ObjectProperty("right", true, proxy(() => Expression)),
//     ...commonNodeProperties,
// ]);
export const ArrayLiteralExpression = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ArrayLiteralExpression)),
    new ObjectProperty("elements", true, proxy(() => NodeArray)),
    new ObjectProperty("multiLine", false, proxy(() => booleanType)),
    ...commonNodeProperties,
]);
export const DestructuringAssignment = new UnionType([
    proxy(() => ObjectDestructuringAssignment),
    proxy(() => ArrayDestructuringAssignment)
]);
export const PropertyAccessExpression = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_PropertyAccessExpression)),
    new ObjectProperty("expression", true, proxy(() => LeftHandSideExpression)),
    new ObjectProperty("questionDotToken", false, proxy(() => Token_QuestionDotToken)),
    new ObjectProperty("name", true, proxy(() => IdentifierOrPrivateIdentifier)),
    ...commonNodeProperties,
]);
export const IdentifierOrPrivateIdentifier = new UnionType([
    proxy(() => Identifier),
    proxy(() => PrivateIdentifier)
]);
export const SpreadElement = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_SpreadElement)),
    // new ObjectProperty("parent", true, proxy(() => type402)),
    new ObjectProperty("expression", true, proxy(() => Expression)),
    ...commonNodePropertiesSansParent,
]);
export const CallExpression = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_CallExpression)),
    new ObjectProperty("expression", true, proxy(() => LeftHandSideExpression)),
    new ObjectProperty("questionDotToken", false, proxy(() => Token_QuestionDotToken)),
    new ObjectProperty("typeArguments", false, proxy(() => NodeArray)),
    new ObjectProperty("arguments", true, proxy(() => NodeArray)),
    ...commonNodeProperties,
]);
export const NewExpression = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_NewExpression)),
    new ObjectProperty("expression", true, proxy(() => LeftHandSideExpression)),
    new ObjectProperty("typeArguments", false, proxy(() => NodeArray)),
    new ObjectProperty("arguments", false, proxy(() => NodeArray)),
    ...commonNodeProperties,
]);
export const type402 = new UnionType([
    proxy(() => CallExpression),
    proxy(() => NewExpression),
    proxy(() => ArrayLiteralExpression)
]);
const AssignmentExpression_EqualsToken_ = BinaryExpression;
// export const AssignmentExpression_EqualsToken_ = new ObjectType(Prototype.NodeObject, [
//     new ObjectProperty("left", true, proxy(() => LeftHandSideExpression)),
//     new ObjectProperty("operatorToken", true, proxy(() => Token_EqualsToken)),
//     new ObjectProperty("kind", true, proxy(() => SyntaxKind_BinaryExpression)),
//     new ObjectProperty("right", true, proxy(() => Expression)),
//     ...commonNodeProperties,
// ]);
export const BindingOrAssignmentElement = new UnionType([
    proxy(() => ParameterDeclaration),
    proxy(() => SpreadAssignment),
    proxy(() => ShorthandPropertyAssignment),
    proxy(() => PropertyAssignment),
    proxy(() => VariableDeclaration),
    proxy(() => BindingElement),
    proxy(() => Identifier),
    proxy(() => ElementAccessExpression),
    proxy(() => PropertyAccessExpression),
    proxy(() => OmittedExpression),
    proxy(() => SpreadElement),
    proxy(() => ArrayLiteralExpression),
    proxy(() => ObjectLiteralExpression),
    proxy(() => AssignmentExpression_EqualsToken_)
]);
export const BindingOrAssignmentElementRestIndicator = new UnionType([
    proxy(() => SpreadAssignment),
    proxy(() => Token_DotDotDotToken),
    proxy(() => SpreadElement)
]);
export const BindingOrAssignmentElementTarget = new UnionType([
    proxy(() => Identifier),
    proxy(() => ElementAccessExpression),
    proxy(() => ObjectBindingPattern),
    proxy(() => ArrayBindingPattern),
    proxy(() => PropertyAccessExpression),
    proxy(() => OmittedExpression),
    proxy(() => ArrayLiteralExpression),
    proxy(() => ObjectLiteralExpression)
]);
export const ObjectBindingOrAssignmentPattern = new UnionType([
    proxy(() => ObjectBindingPattern),
    proxy(() => ObjectLiteralExpression)
]);
export const ArrayBindingOrAssignmentPattern = new UnionType([
    proxy(() => ArrayBindingPattern),
    proxy(() => ArrayLiteralExpression)
]);
export const AssignmentPattern = new UnionType([
    proxy(() => ArrayLiteralExpression),
    proxy(() => ObjectLiteralExpression)
]);
export const BindingOrAssignmentPattern = new UnionType([
    proxy(() => ObjectBindingPattern),
    proxy(() => ArrayBindingPattern),
    proxy(() => ArrayLiteralExpression),
    proxy(() => ObjectLiteralExpression)
]);
export const ConditionalExpression = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ConditionalExpression)),
    new ObjectProperty("condition", true, proxy(() => Expression)),
    new ObjectProperty("questionToken", true, proxy(() => Token_QuestionToken)),
    new ObjectProperty("whenTrue", true, proxy(() => Expression)),
    new ObjectProperty("colonToken", true, proxy(() => Token_ColonToken)),
    new ObjectProperty("whenFalse", true, proxy(() => Expression)),
    ...commonNodeProperties,
]);
export const LiteralLikeNode = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("text", true, proxy(() => stringType)),
    new ObjectProperty("isUnterminated", false, proxy(() => booleanType)),
    new ObjectProperty("hasExtendedUnicodeEscape", false, proxy(() => booleanType)),
    new ObjectProperty("kind", true, proxy(() => numberType)),
    ...commonNodeProperties,
]);
export const TemplateLiteralLikeNode = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("rawText", false, proxy(() => stringType)),
    new ObjectProperty("text", true, proxy(() => stringType)),
    new ObjectProperty("isUnterminated", false, proxy(() => booleanType)),
    new ObjectProperty("hasExtendedUnicodeEscape", false, proxy(() => booleanType)),
    new ObjectProperty("kind", true, proxy(() => numberType)),
    ...commonNodeProperties,
]);
export const LiteralExpression = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("text", true, proxy(() => stringType)),
    new ObjectProperty("isUnterminated", false, proxy(() => booleanType)),
    new ObjectProperty("hasExtendedUnicodeEscape", false, proxy(() => booleanType)),
    new ObjectProperty("kind", true, proxy(() => numberType)),
    ...commonNodeProperties,
]);
export const RegularExpressionLiteral = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_RegularExpressionLiteral)),
    new ObjectProperty("text", true, proxy(() => stringType)),
    new ObjectProperty("isUnterminated", false, proxy(() => booleanType)),
    new ObjectProperty("hasExtendedUnicodeEscape", false, proxy(() => booleanType)),
    ...commonNodeProperties,
]);
export const BigIntLiteral = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_BigIntLiteral)),
    new ObjectProperty("text", true, proxy(() => stringType)),
    new ObjectProperty("isUnterminated", false, proxy(() => booleanType)),
    new ObjectProperty("hasExtendedUnicodeEscape", false, proxy(() => booleanType)),
    ...commonNodeProperties,
]);
export const TemplateHead = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_TemplateHead)),
    // new ObjectProperty("parent", true, proxy(() => TemplateExpression)),
    new ObjectProperty("templateFlags", false, proxy(() => numberType)),
    new ObjectProperty("rawText", false, proxy(() => stringType)),
    new ObjectProperty("text", true, proxy(() => stringType)),
    new ObjectProperty("isUnterminated", false, proxy(() => booleanType)),
    new ObjectProperty("hasExtendedUnicodeEscape", false, proxy(() => booleanType)),
    ...commonNodePropertiesSansParent,
]);
export const TemplateExpression = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_TemplateExpression)),
    new ObjectProperty("head", true, proxy(() => TemplateHead)),
    new ObjectProperty("templateSpans", true, proxy(() => NodeArray)),
    ...commonNodeProperties,
]);
export const TemplateSpan = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_TemplateSpan)),
    // new ObjectProperty("parent", true, proxy(() => TemplateExpression)),
    new ObjectProperty("expression", true, proxy(() => Expression)),
    new ObjectProperty("literal", true, proxy(() => type432)),
    ...commonNodePropertiesSansParent,
]);
export const TemplateMiddle = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_TemplateMiddle)),
    // new ObjectProperty("parent", true, proxy(() => TemplateSpan)),
    new ObjectProperty("templateFlags", false, proxy(() => numberType)),
    new ObjectProperty("rawText", false, proxy(() => stringType)),
    new ObjectProperty("text", true, proxy(() => stringType)),
    new ObjectProperty("isUnterminated", false, proxy(() => booleanType)),
    new ObjectProperty("hasExtendedUnicodeEscape", false, proxy(() => booleanType)),
    ...commonNodePropertiesSansParent,
]);
export const TemplateTail = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_TemplateTail)),
    // new ObjectProperty("parent", true, proxy(() => TemplateSpan)),
    new ObjectProperty("templateFlags", false, proxy(() => numberType)),
    new ObjectProperty("rawText", false, proxy(() => stringType)),
    new ObjectProperty("text", true, proxy(() => stringType)),
    new ObjectProperty("isUnterminated", false, proxy(() => booleanType)),
    new ObjectProperty("hasExtendedUnicodeEscape", false, proxy(() => booleanType)),
    ...commonNodePropertiesSansParent,
]);
export const type432 = new UnionType([
    proxy(() => TemplateMiddle),
    proxy(() => TemplateTail)
]);
export const TemplateLiteral = new UnionType([
    proxy(() => NoSubstitutionTemplateLiteral),
    proxy(() => TemplateExpression)
]);
export const EntityNameOrEntityNameExpression = new UnionType([
    proxy(() => Identifier),
    proxy(() => QualifiedName),
    proxy(() => PropertyAccessEntityNameExpression)
]);
export const AccessExpression = new UnionType([
    proxy(() => ElementAccessExpression),
    proxy(() => PropertyAccessExpression)
]);
export const PrivateIdentifierPropertyAccessExpression = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("name", true, proxy(() => PrivateIdentifier)),
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_PropertyAccessExpression)),
    new ObjectProperty("expression", true, proxy(() => LeftHandSideExpression)),
    new ObjectProperty("questionDotToken", false, proxy(() => Token_QuestionDotToken)),
    ...commonNodeProperties,
]);
export const PropertyAccessChain = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("name", true, proxy(() => Identifier)),
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_PropertyAccessExpression)),
    new ObjectProperty("expression", true, proxy(() => LeftHandSideExpression)),
    new ObjectProperty("questionDotToken", false, proxy(() => Token_QuestionDotToken)),
    ...commonNodeProperties,
]);
export const PropertyAccessChainRoot = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("questionDotToken", true, proxy(() => Token_QuestionDotToken)),
    new ObjectProperty("name", true, proxy(() => Identifier)),
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_PropertyAccessExpression)),
    new ObjectProperty("expression", true, proxy(() => LeftHandSideExpression)),
    ...commonNodeProperties,
]);
export const SuperPropertyAccessExpression = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("expression", true, proxy(() => SuperExpression)),
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_PropertyAccessExpression)),
    new ObjectProperty("questionDotToken", false, proxy(() => Token_QuestionDotToken)),
    new ObjectProperty("name", true, proxy(() => IdentifierOrPrivateIdentifier)),
    ...commonNodeProperties,
]);
export const ElementAccessChain = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ElementAccessExpression)),
    new ObjectProperty("expression", true, proxy(() => LeftHandSideExpression)),
    new ObjectProperty("questionDotToken", false, proxy(() => Token_QuestionDotToken)),
    new ObjectProperty("argumentExpression", true, proxy(() => Expression)),
    ...commonNodeProperties,
]);
export const ElementAccessChainRoot = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("questionDotToken", true, proxy(() => Token_QuestionDotToken)),
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ElementAccessExpression)),
    new ObjectProperty("expression", true, proxy(() => LeftHandSideExpression)),
    new ObjectProperty("argumentExpression", true, proxy(() => Expression)),
    ...commonNodeProperties,
]);
export const SuperElementAccessExpression = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("expression", true, proxy(() => SuperExpression)),
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ElementAccessExpression)),
    new ObjectProperty("questionDotToken", false, proxy(() => Token_QuestionDotToken)),
    new ObjectProperty("argumentExpression", true, proxy(() => Expression)),
    ...commonNodeProperties,
]);
export const SuperProperty = new UnionType([
    proxy(() => SuperPropertyAccessExpression),
    proxy(() => SuperElementAccessExpression)
]);
export const CallChain = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_CallExpression)),
    new ObjectProperty("expression", true, proxy(() => LeftHandSideExpression)),
    new ObjectProperty("questionDotToken", false, proxy(() => Token_QuestionDotToken)),
    new ObjectProperty("typeArguments", false, proxy(() => NodeArray)),
    new ObjectProperty("arguments", true, proxy(() => NodeArray)),
    ...commonNodeProperties,
]);
export const CallChainRoot = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("questionDotToken", true, proxy(() => Token_QuestionDotToken)),
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_CallExpression)),
    new ObjectProperty("expression", true, proxy(() => LeftHandSideExpression)),
    new ObjectProperty("typeArguments", false, proxy(() => NodeArray)),
    new ObjectProperty("arguments", true, proxy(() => NodeArray)),
    ...commonNodeProperties,
]);
export const OptionalChain = new UnionType([
    proxy(() => PropertyAccessChain),
    proxy(() => ElementAccessChain),
    proxy(() => CallChain)
]);
export const OptionalChainRoot = new UnionType([
    proxy(() => PropertyAccessChainRoot),
    proxy(() => ElementAccessChainRoot),
    proxy(() => CallChainRoot)
]);
export const WellKnownSymbolExpression = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("expression", true, proxy(() => identifierWithEscapedTextIsLiteralTypeSymbol)),
    new ObjectProperty("name", true, proxy(() => Identifier)),
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_PropertyAccessExpression)),
    new ObjectProperty("questionDotToken", false, proxy(() => Token_QuestionDotToken)),
    ...commonNodeProperties,
]);
export const literalTypeSymbol = new LiteralType("Symbol");
export const identifierWithEscapedTextIsLiteralTypeSymbol = new ObjectType(Prototype.NodeObject, overrideProperties(
    ...identifierProperties,
    new ObjectProperty("escapedText", true, proxy(() => literalTypeSymbol))
));
export const LiteralLikeElementAccessExpression_ArgumentExpression = new UnionType([
    proxy(() => StringLiteral),
    proxy(() => NumericLiteral),
    proxy(() => NoSubstitutionTemplateLiteral),
    proxy(() => WellKnownSymbolExpression)
]);
export const BindableStaticElementAccessExpression = new ObjectType(Prototype.NodeObject, overrideProperties(
    ...elementAccessExpressionProperties,
    ...declarationProperties,
    new ObjectProperty("argumentExpression", true, proxy(() => LiteralLikeElementAccessExpression_ArgumentExpression)),
    new ObjectProperty("expression", true, proxy(() => BindableStaticNameExpression)),
));
export const BindableStaticNameExpression = new UnionType([
    proxy(() => Identifier),
    proxy(() => PropertyAccessEntityNameExpression),
    proxy(() => BindableStaticElementAccessExpression)
]);
export const type460 = new UnionType([
    proxy(() => StringLiteral),
    proxy(() => NumericLiteral),
    proxy(() => NoSubstitutionTemplateLiteral)
]);
export const BindableObjectDefinePropertyCall_Arguments = new ObjectType(Prototype.Array, [
    new ObjectProperty("0", true, proxy(() => BindableStaticNameExpression)),
    new ObjectProperty("1", true, proxy(() => type460)),
    new ObjectProperty("2", true, proxy(() => ObjectLiteralExpression)),
]);
export const BindableObjectDefinePropertyCall = new ObjectType(Prototype.NodeObject, overrideProperties(
    ...CallExpression.properties,
    new ObjectProperty("arguments", true, proxy(() => BindableObjectDefinePropertyCall_Arguments)),
));
export const LiteralLikeElementAccessExpression = new ObjectType(Prototype.NodeObject, overrideProperties(
    ...elementAccessExpressionProperties,
    ...declarationProperties,
    new ObjectProperty("argumentExpression", true, proxy(() => LiteralLikeElementAccessExpression_ArgumentExpression)),
));
export const BindableElementAccessExpression = new ObjectType(Prototype.NodeObject, overrideProperties(
    ...elementAccessExpressionProperties,
    new ObjectProperty("expression", true, proxy(() => BindableStaticNameExpression)),
));
export const type471 = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("argumentExpression", true, proxy(() => LiteralLikeElementAccessExpression_ArgumentExpression)),
]);
export const type473 = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("expression", true, proxy(() => BindableStaticNameExpression)),
]);
export const BindableStaticAccessExpression = new UnionType([
    proxy(() => PropertyAccessEntityNameExpression),
    proxy(() => BindableStaticElementAccessExpression)
]);
export const BindableAccessExpression = new UnionType([
    proxy(() => PropertyAccessEntityNameExpression),
    proxy(() => BindableElementAccessExpression)
]);
const BindableStaticPropertyAssignmentExpression = BinaryExpression;
// export const BindableStaticPropertyAssignmentExpression = new ObjectType(Prototype.NodeObject, [
//     new ObjectProperty("left", true, proxy(() => BindableStaticAccessExpression)),
//     new ObjectProperty("kind", true, proxy(() => SyntaxKind_BinaryExpression)),
//     new ObjectProperty("operatorToken", true, proxy(() => OperatorToken)),
//     new ObjectProperty("right", true, proxy(() => Expression)),
//     ...commonNodeProperties,
// ]);
const BindablePropertyAssignmentExpression = BinaryExpression;
// export const BindablePropertyAssignmentExpression = new ObjectType(Prototype.NodeObject, [
//     new ObjectProperty("left", true, proxy(() => BindableAccessExpression)),
//     new ObjectProperty("kind", true, proxy(() => SyntaxKind_BinaryExpression)),
//     new ObjectProperty("operatorToken", true, proxy(() => OperatorToken)),
//     new ObjectProperty("right", true, proxy(() => Expression)),
//     ...commonNodeProperties,
// ]);
export const SuperCall = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("expression", true, proxy(() => SuperExpression)),
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_CallExpression)),
    new ObjectProperty("questionDotToken", false, proxy(() => Token_QuestionDotToken)),
    new ObjectProperty("typeArguments", false, proxy(() => NodeArray)),
    new ObjectProperty("arguments", true, proxy(() => NodeArray)),
    ...commonNodeProperties,
]);
export const ImportCall = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("expression", true, proxy(() => ImportExpression)),
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_CallExpression)),
    new ObjectProperty("questionDotToken", false, proxy(() => Token_QuestionDotToken)),
    new ObjectProperty("typeArguments", false, proxy(() => NodeArray)),
    new ObjectProperty("arguments", true, proxy(() => NodeArray)),
    ...commonNodeProperties,
]);
export const TaggedTemplateExpression = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_TaggedTemplateExpression)),
    new ObjectProperty("tag", true, proxy(() => LeftHandSideExpression)),
    new ObjectProperty("typeArguments", false, proxy(() => NodeArray)),
    new ObjectProperty("template", true, proxy(() => TemplateLiteral)),
    new ObjectProperty("questionDotToken", false, proxy(() => Token_QuestionDotToken)),
    ...commonNodeProperties,
]);
export const JsxOpeningElement = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JsxOpeningElement)),
    // new ObjectProperty("parent", true, proxy(() => JsxElement)),
    new ObjectProperty("tagName", true, proxy(() => JsxTagNameExpression)),
    new ObjectProperty("typeArguments", false, proxy(() => NodeArray)),
    new ObjectProperty("attributes", true, proxy(() => JsxAttributes)),
    ...commonNodePropertiesSansParent,
]);
export const JsxElement = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JsxElement)),
    new ObjectProperty("openingElement", true, proxy(() => JsxOpeningElement)),
    new ObjectProperty("children", true, proxy(() => NodeArray)),
    new ObjectProperty("closingElement", true, proxy(() => JsxClosingElement)),
    ...commonNodeProperties,
]);
export const JsxClosingElement = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JsxClosingElement)),
    // new ObjectProperty("parent", true, proxy(() => JsxElement)),
    new ObjectProperty("tagName", true, proxy(() => JsxTagNameExpression)),
    ...commonNodePropertiesSansParent,
]);
export const JsxTagNamePropertyAccess = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("expression", true, proxy(() => JsxTagNameExpression)),
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_PropertyAccessExpression)),
    new ObjectProperty("questionDotToken", false, proxy(() => Token_QuestionDotToken)),
    new ObjectProperty("name", true, proxy(() => IdentifierOrPrivateIdentifier)),
    ...commonNodeProperties,
]);
export const JsxTagNameExpression = new UnionType([
    proxy(() => Identifier),
    proxy(() => ThisExpression),
    proxy(() => JsxTagNamePropertyAccess)
]);
export const JsxAttributes = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JsxAttributes)),
    // new ObjectProperty("parent", true, proxy(() => JsxOpeningLikeElement)),
    new ObjectProperty("properties", true, proxy(() => NodeArray)),
    ...commonNodePropertiesSansParent,
]);
export const JsxSelfClosingElement = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JsxSelfClosingElement)),
    new ObjectProperty("tagName", true, proxy(() => JsxTagNameExpression)),
    new ObjectProperty("typeArguments", false, proxy(() => NodeArray)),
    new ObjectProperty("attributes", true, proxy(() => JsxAttributes)),
    ...commonNodeProperties,
]);
export const JsxOpeningLikeElement = new UnionType([
    proxy(() => JsxOpeningElement),
    proxy(() => JsxSelfClosingElement)
]);
export const CallLikeExpression = new UnionType([
    proxy(() => CallExpression),
    proxy(() => NewExpression),
    proxy(() => TaggedTemplateExpression),
    proxy(() => JsxOpeningElement),
    proxy(() => JsxSelfClosingElement),
    proxy(() => Decorator)
]);
export const JsxAttribute = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JsxAttribute)),
    // new ObjectProperty("parent", true, proxy(() => JsxAttributes)),
    new ObjectProperty("name", true, proxy(() => Identifier)),
    new ObjectProperty("initializer", false, proxy(() => type508)),
    ...commonNodePropertiesSansParent,
]);
export const JsxExpression = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JsxExpression)),
    // new ObjectProperty("parent", true, proxy(() => type506)),
    new ObjectProperty("dotDotDotToken", false, proxy(() => Token_DotDotDotToken)),
    new ObjectProperty("expression", false, proxy(() => Expression)),
    ...commonNodePropertiesSansParent,
]);
export const JsxSpreadAttribute = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JsxSpreadAttribute)),
    // new ObjectProperty("parent", true, proxy(() => JsxAttributes)),
    new ObjectProperty("expression", true, proxy(() => Expression)),
    new ObjectProperty("name", false, proxy(() => PropertyName)),
    ...commonNodePropertiesSansParent,
]);
export const type506 = new UnionType([
    proxy(() => JsxAttribute),
    proxy(() => JsxElement),
    proxy(() => JsxSpreadAttribute)
]);
export const type508 = new UnionType([
    proxy(() => StringLiteral),
    proxy(() => JsxExpression)
]);
export const JsxFragment = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JsxFragment)),
    new ObjectProperty("openingFragment", true, proxy(() => JsxOpeningFragment)),
    new ObjectProperty("children", true, proxy(() => NodeArray)),
    new ObjectProperty("closingFragment", true, proxy(() => JsxClosingFragment)),
    ...commonNodeProperties,
]);
export const JsxOpeningFragment = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JsxOpeningFragment)),
    // new ObjectProperty("parent", true, proxy(() => JsxFragment)),
    ...commonNodePropertiesSansParent,
]);
export const JsxClosingFragment = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JsxClosingFragment)),
    // new ObjectProperty("parent", true, proxy(() => JsxFragment)),
    ...commonNodePropertiesSansParent,
]);
export const JsxText = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JsxText)),
    new ObjectProperty("containsOnlyTriviaWhiteSpaces", true, proxy(() => booleanType)),
    // new ObjectProperty("parent", true, proxy(() => JsxElement)),
    new ObjectProperty("text", true, proxy(() => stringType)),
    new ObjectProperty("isUnterminated", false, proxy(() => booleanType)),
    new ObjectProperty("hasExtendedUnicodeEscape", false, proxy(() => booleanType)),
    ...commonNodePropertiesSansParent,
]);
export const AsExpression = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_AsExpression)),
    new ObjectProperty("expression", true, proxy(() => Expression)),
    new ObjectProperty("type", true, proxy(() => TypeNode)),
    ...commonNodeProperties,
]);
export const TypeAssertion = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_TypeAssertionExpression)),
    new ObjectProperty("type", true, proxy(() => TypeNode)),
    new ObjectProperty("expression", true, proxy(() => UnaryExpression)),
    ...commonNodeProperties,
]);
export const AssertionExpression = new UnionType([
    proxy(() => TypeAssertion),
    proxy(() => AsExpression)
]);
export const NonNullExpression = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_NonNullExpression)),
    new ObjectProperty("expression", true, proxy(() => Expression)),
    ...commonNodeProperties,
]);
export const MetaProperty = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_MetaProperty)),
    new ObjectProperty("keywordToken", true, proxy(() => numberType)),
    new ObjectProperty("name", true, proxy(() => Identifier)),
    ...commonNodeProperties,
]);
export const ImportMetaProperty = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("keywordToken", true, proxy(() => SyntaxKind_ImportKeyword)),
    new ObjectProperty("name", true, proxy(() => identifierWithEscapedTextIsLiteralTypemeta)),
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_MetaProperty)),
    ...commonNodeProperties,
]);
export const literalTypemeta = new LiteralType("meta");
export const identifierWithEscapedTextIsLiteralTypemeta = new ObjectType(Prototype.NodeObject, overrideProperties(
    ...identifierProperties,
    new ObjectProperty("escapedText", true, proxy(() => literalTypemeta)),
));
export const JsxAttributeLike = new UnionType([
    proxy(() => JsxAttribute),
    proxy(() => JsxSpreadAttribute)
]);
export const JsxChild = new UnionType([
    proxy(() => JsxSelfClosingElement),
    proxy(() => JsxElement),
    proxy(() => JsxFragment),
    proxy(() => JsxExpression),
    proxy(() => JsxText)
]);
export const NotEmittedStatement = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_NotEmittedStatement)),
    ...commonNodeProperties,
]);
export const EndOfDeclarationMarker = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_EndOfDeclarationMarker)),
    ...commonNodeProperties,
]);
export const CommaListExpression = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_CommaListExpression)),
    new ObjectProperty("elements", true, proxy(() => NodeArray)),
    ...commonNodeProperties,
]);
export const MergeDeclarationMarker = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_MergeDeclarationMarker)),
    ...commonNodeProperties,
]);
export const SyntheticReferenceExpression = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_SyntheticReferenceExpression)),
    new ObjectProperty("expression", true, proxy(() => Expression)),
    new ObjectProperty("thisArg", true, proxy(() => Expression)),
    ...commonNodeProperties,
]);
export const EmptyStatement = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_EmptyStatement)),
    ...commonNodeProperties,
]);
export const DebuggerStatement = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_DebuggerStatement)),
    ...commonNodeProperties,
]);
export const MissingDeclaration = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_MissingDeclaration)),
    new ObjectProperty("name", false, proxy(() => Identifier)),
    ...commonNodeProperties,
]);
export const CaseClause = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_CaseClause)),
    // new ObjectProperty("parent", true, proxy(() => CaseBlock)),
    new ObjectProperty("expression", true, proxy(() => Expression)),
    new ObjectProperty("statements", true, proxy(() => NodeArray)),
    new ObjectProperty("fallthroughFlowNode", false, proxy(() => FlowNode)),
    ...commonNodePropertiesSansParent,
]);
export const CaseBlock = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_CaseBlock)),
    // new ObjectProperty("parent", true, proxy(() => SwitchStatement)),
    new ObjectProperty("clauses", true, proxy(() => NodeArray)),
    ...commonNodePropertiesSansParent,
]);
export const SwitchStatement = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_SwitchStatement)),
    new ObjectProperty("expression", true, proxy(() => Expression)),
    new ObjectProperty("caseBlock", true, proxy(() => CaseBlock)),
    new ObjectProperty("possiblyExhaustive", false, proxy(() => booleanType)),
    ...commonNodeProperties,
]);
export const DefaultClause = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_DefaultClause)),
    // new ObjectProperty("parent", true, proxy(() => CaseBlock)),
    new ObjectProperty("statements", true, proxy(() => NodeArray)),
    new ObjectProperty("fallthroughFlowNode", false, proxy(() => FlowNode)),
    ...commonNodePropertiesSansParent,
]);
export const BlockLike = new UnionType([
    proxy(() => Block),
    proxy(() => SourceFile),
    proxy(() => ModuleBlock),
    proxy(() => CaseClause),
    proxy(() => DefaultClause)
]);
export const PrologueDirective = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("expression", true, proxy(() => StringLiteral)),
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ExpressionStatement)),
    ...commonNodeProperties,
    ...jsDocContainerProperties,
]);
export const IfStatement = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_IfStatement)),
    new ObjectProperty("expression", true, proxy(() => Expression)),
    new ObjectProperty("thenStatement", true, proxy(() => Statement)),
    new ObjectProperty("elseStatement", false, proxy(() => Statement)),
    ...commonNodeProperties,
]);
export const IterationStatement = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("statement", true, proxy(() => Statement)),
    new ObjectProperty("kind", true, proxy(() => numberType)),
    ...commonNodeProperties,
]);
export const DoStatement = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_DoStatement)),
    new ObjectProperty("expression", true, proxy(() => Expression)),
    new ObjectProperty("statement", true, proxy(() => Statement)),
    ...commonNodeProperties,
]);
export const WhileStatement = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_WhileStatement)),
    new ObjectProperty("expression", true, proxy(() => Expression)),
    new ObjectProperty("statement", true, proxy(() => Statement)),
    ...commonNodeProperties,
]);
export const ForInOrOfStatement = new UnionType([
    proxy(() => ForInStatement),
    proxy(() => ForOfStatement)
]);
export const BreakStatement = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_BreakStatement)),
    new ObjectProperty("label", false, proxy(() => Identifier)),
    ...commonNodeProperties,
]);
export const ContinueStatement = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ContinueStatement)),
    new ObjectProperty("label", false, proxy(() => Identifier)),
    ...commonNodeProperties,
]);
export const BreakOrContinueStatement = new UnionType([
    proxy(() => BreakStatement),
    proxy(() => ContinueStatement)
]);
export const ReturnStatement = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ReturnStatement)),
    new ObjectProperty("expression", false, proxy(() => Expression)),
    ...commonNodeProperties,
]);
export const WithStatement = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_WithStatement)),
    new ObjectProperty("expression", true, proxy(() => Expression)),
    new ObjectProperty("statement", true, proxy(() => Statement)),
    ...commonNodeProperties,
]);
export const CaseOrDefaultClause = new UnionType([
    proxy(() => CaseClause),
    proxy(() => DefaultClause)
]);
export const ThrowStatement = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ThrowStatement)),
    new ObjectProperty("expression", false, proxy(() => Expression)),
    ...commonNodeProperties,
]);
export const JSDocTypedefTag = new ObjectType(Prototype.NodeObject, [
    // new ObjectProperty("parent", true, proxy(() => JSDoc)),
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocTypedefTag)),
    new ObjectProperty("fullName", false, proxy(() => type582)),
    new ObjectProperty("name", false, proxy(() => Identifier)),
    new ObjectProperty("typeExpression", false, proxy(() => type583)),
    new ObjectProperty("tagName", true, proxy(() => Identifier)),
    new ObjectProperty("comment", false, proxy(() => stringType)),
    ...commonNodePropertiesSansParent,
]);
export const type582 = new UnionType([
    proxy(() => Identifier),
    proxy(() => JSDocNamespaceDeclaration)
]);
export const type583 = new UnionType([
    proxy(() => JSDocTypeExpression),
    proxy(() => JSDocTypeLiteral)
]);
export const JSDocCallbackTag = new ObjectType(Prototype.NodeObject, [
    // new ObjectProperty("parent", true, proxy(() => JSDoc)),
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocCallbackTag)),
    new ObjectProperty("fullName", false, proxy(() => type586)),
    new ObjectProperty("name", false, proxy(() => Identifier)),
    new ObjectProperty("typeExpression", true, proxy(() => JSDocSignature)),
    new ObjectProperty("tagName", true, proxy(() => Identifier)),
    new ObjectProperty("comment", false, proxy(() => stringType)),
    ...commonNodePropertiesSansParent,
]);
export const type586 = new UnionType([
    proxy(() => Identifier),
    proxy(() => JSDocNamespaceDeclaration)
]);
export const JSDocSignature = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocSignature)),
    new ObjectProperty("typeParameters", false, proxy(() => type589)),
    new ObjectProperty("parameters", true, proxy(() => type590)),
    new ObjectProperty("type", false, proxy(() => JSDocReturnTag)),
    ...commonNodeProperties,
]);
export const type589 = new ArrayType(proxy(() => JSDocTemplateTag), []);
export const type590 = new ArrayType(proxy(() => JSDocParameterTag), []);
export const JSDocParameterTag = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocParameterTag)),
    // new ObjectProperty("parent", true, proxy(() => JSDoc)),
    new ObjectProperty("name", true, proxy(() => EntityName)),
    new ObjectProperty("typeExpression", false, proxy(() => JSDocTypeExpression)),
    new ObjectProperty("isNameFirst", true, proxy(() => booleanType)),
    new ObjectProperty("isBracketed", true, proxy(() => booleanType)),
    new ObjectProperty("tagName", true, proxy(() => Identifier)),
    new ObjectProperty("comment", false, proxy(() => stringType)),
    ...commonNodePropertiesSansParent,
]);
export const JSDocReturnTag = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocReturnTag)),
    new ObjectProperty("typeExpression", false, proxy(() => JSDocTypeExpression)),
    // new ObjectProperty("parent", true, proxy(() => JSDocOrJSDocTypeLiteral)),
    new ObjectProperty("tagName", true, proxy(() => Identifier)),
    new ObjectProperty("comment", false, proxy(() => stringType)),
    ...commonNodePropertiesSansParent,
]);
export const DeclarationWithTypeParameters = new UnionType([
    proxy(() => CallSignatureDeclaration),
    proxy(() => ConstructSignatureDeclaration),
    proxy(() => MethodSignature),
    proxy(() => ArrowFunction),
    proxy(() => FunctionExpression),
    proxy(() => FunctionDeclaration),
    proxy(() => ConstructorDeclaration),
    proxy(() => MethodDeclaration),
    proxy(() => GetAccessorDeclaration),
    proxy(() => SetAccessorDeclaration),
    proxy(() => ClassDeclaration),
    proxy(() => ClassExpression),
    proxy(() => InterfaceDeclaration),
    proxy(() => TypeAliasDeclaration),
    proxy(() => IndexSignatureDeclaration),
    proxy(() => FunctionTypeNode),
    proxy(() => ConstructorTypeNode),
    proxy(() => JSDocFunctionType),
    proxy(() => JSDocTemplateTag),
    proxy(() => JSDocTypedefTag),
    proxy(() => JSDocCallbackTag),
    proxy(() => JSDocSignature)
]);
export const DeclarationWithTypeParameterChildren = new UnionType([
    proxy(() => CallSignatureDeclaration),
    proxy(() => ConstructSignatureDeclaration),
    proxy(() => MethodSignature),
    proxy(() => ArrowFunction),
    proxy(() => FunctionExpression),
    proxy(() => FunctionDeclaration),
    proxy(() => ConstructorDeclaration),
    proxy(() => MethodDeclaration),
    proxy(() => GetAccessorDeclaration),
    proxy(() => SetAccessorDeclaration),
    proxy(() => ClassDeclaration),
    proxy(() => ClassExpression),
    proxy(() => InterfaceDeclaration),
    proxy(() => TypeAliasDeclaration),
    proxy(() => IndexSignatureDeclaration),
    proxy(() => FunctionTypeNode),
    proxy(() => ConstructorTypeNode),
    proxy(() => JSDocFunctionType),
    proxy(() => JSDocTemplateTag)
]);
export const ClassLikeDeclarationBase = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => numberType)),
    new ObjectProperty("name", false, proxy(() => Identifier)),
    new ObjectProperty("typeParameters", false, proxy(() => NodeArray)),
    new ObjectProperty("heritageClauses", false, proxy(() => NodeArray)),
    new ObjectProperty("members", true, proxy(() => NodeArray)),
    ...commonNodeProperties,
    ...jsDocContainerProperties,
]);
export const ModuleBody = new UnionType([
    proxy(() => Identifier),
    proxy(() => ModuleBlock),
    proxy(() => NamespaceDeclaration),
    proxy(() => JSDocNamespaceDeclaration)
]);
export const AmbientModuleDeclaration = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("body", false, proxy(() => ModuleBlock)),
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ModuleDeclaration)),
    // new ObjectProperty("parent", true, proxy(() => type603)),
    new ObjectProperty("name", true, proxy(() => ModuleName)),
    ...commonNodePropertiesSansParent,
    ...jsDocContainerProperties,
]);
export const type603 = new UnionType([
    proxy(() => Identifier),
    proxy(() => SourceFile),
    proxy(() => ModuleBlock),
    proxy(() => NamespaceDeclaration),
    proxy(() => JSDocNamespaceDeclaration)
]);
export const ImportDeclaration = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ImportDeclaration)),
    // new ObjectProperty("parent", true, proxy(() => type608)),
    new ObjectProperty("importClause", false, proxy(() => ImportClause)),
    new ObjectProperty("moduleSpecifier", true, proxy(() => Expression)),
    ...commonNodePropertiesSansParent,
]);
export const type608 = new UnionType([
    proxy(() => SourceFile),
    proxy(() => ModuleBlock)
]);
export const ImportClause = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ImportClause)),
    // new ObjectProperty("parent", true, proxy(() => ImportDeclaration)),
    new ObjectProperty("isTypeOnly", true, proxy(() => booleanType)),
    new ObjectProperty("name", false, proxy(() => Identifier)),
    new ObjectProperty("namedBindings", false, proxy(() => NamedImportBindings)),
    ...commonNodePropertiesSansParent,
]);
export const NamespaceImport = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_NamespaceImport)),
    // new ObjectProperty("parent", true, proxy(() => ImportClause)),
    new ObjectProperty("name", true, proxy(() => Identifier)),
    ...commonNodePropertiesSansParent,
]);
export const NamedImports = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_NamedImports)),
    // new ObjectProperty("parent", true, proxy(() => ImportClause)),
    new ObjectProperty("elements", true, proxy(() => NodeArray)),
    ...commonNodePropertiesSansParent,
]);
export const NamedImportBindings = new UnionType([
    proxy(() => NamespaceImport),
    proxy(() => NamedImports)
]);
export const ImportSpecifier = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ImportSpecifier)),
    // new ObjectProperty("parent", true, proxy(() => NamedImports)),
    new ObjectProperty("propertyName", false, proxy(() => Identifier)),
    new ObjectProperty("name", true, proxy(() => Identifier)),
    ...commonNodePropertiesSansParent,
]);
export const NamespaceExportDeclaration = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_NamespaceExportDeclaration)),
    new ObjectProperty("name", true, proxy(() => Identifier)),
    ...commonNodeProperties,
]);
export const NamedImportsOrExports = new UnionType([
    proxy(() => NamedImports),
    proxy(() => NamedExports)
]);
export const ImportOrExportSpecifier = new UnionType([
    proxy(() => ImportSpecifier),
    proxy(() => ExportSpecifier)
]);
export const TypeOnlyCompatibleAliasDeclaration = new UnionType([
    proxy(() => NamespaceImport),
    proxy(() => ImportClause),
    proxy(() => ImportSpecifier),
    proxy(() => ExportSpecifier)
]);
export const ExportAssignment = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ExportAssignment)),
    // new ObjectProperty("parent", true, proxy(() => SourceFile)),
    new ObjectProperty("isExportEquals", false, proxy(() => booleanType)),
    new ObjectProperty("expression", true, proxy(() => Expression)),
    new ObjectProperty("name", false, proxy(() => type625)),
    ...commonNodePropertiesSansParent,
]);
export const type625 = new UnionType([
    proxy(() => Identifier),
    proxy(() => StringLiteral),
    proxy(() => NumericLiteral)
]);
export const CommentRange = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("hasTrailingNewLine", false, proxy(() => booleanType)),
    new ObjectProperty("kind", true, proxy(() => numberType)),
    new ObjectProperty("pos", true, proxy(() => numberType)),
    new ObjectProperty("end", true, proxy(() => numberType)),
]);
export const SynthesizedComment = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("text", true, proxy(() => stringType)),
    new ObjectProperty("pos", true, proxy(() => literalNegative1)),
    new ObjectProperty("end", true, proxy(() => literalNegative1)),
    new ObjectProperty("hasTrailingNewLine", false, proxy(() => booleanType)),
    new ObjectProperty("kind", true, proxy(() => numberType)),
]);
export const literalNegative1 = new LiteralType(-1);
export const JSDocType = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => numberType)),
    ...commonNodeProperties,
]);
export const JSDocAllType = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocAllType)),
    ...commonNodeProperties,
]);
export const JSDocUnknownType = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocUnknownType)),
    ...commonNodeProperties,
]);
export const JSDocNonNullableType = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocNonNullableType)),
    new ObjectProperty("type", true, proxy(() => TypeNode)),
    ...commonNodeProperties,
]);
export const JSDocNullableType = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocNullableType)),
    new ObjectProperty("type", true, proxy(() => TypeNode)),
    ...commonNodeProperties,
]);
export const JSDocOptionalType = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocOptionalType)),
    new ObjectProperty("type", true, proxy(() => TypeNode)),
    ...commonNodeProperties,
]);
export const JSDocVariadicType = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocVariadicType)),
    new ObjectProperty("type", true, proxy(() => TypeNode)),
    ...commonNodeProperties,
]);
export const JSDocNamepathType = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocNamepathType)),
    new ObjectProperty("type", true, proxy(() => TypeNode)),
    ...commonNodeProperties,
]);
export const JSDocTypeReferencingNode = new UnionType([
    proxy(() => JSDocNonNullableType),
    proxy(() => JSDocNullableType),
    proxy(() => JSDocOptionalType),
    proxy(() => JSDocVariadicType)
]);
export const JSDocUnknownTag = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocTag)),
    // new ObjectProperty("parent", true, proxy(() => JSDocOrJSDocTypeLiteral)),
    new ObjectProperty("tagName", true, proxy(() => Identifier)),
    new ObjectProperty("comment", false, proxy(() => stringType)),
    ...commonNodePropertiesSansParent,
]);
export const JSDocAuthorTag = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocAuthorTag)),
    // new ObjectProperty("parent", true, proxy(() => JSDocOrJSDocTypeLiteral)),
    new ObjectProperty("tagName", true, proxy(() => Identifier)),
    new ObjectProperty("comment", false, proxy(() => stringType)),
    ...commonNodePropertiesSansParent,
]);
export const JSDocClassTag = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocClassTag)),
    // new ObjectProperty("parent", true, proxy(() => JSDocOrJSDocTypeLiteral)),
    new ObjectProperty("tagName", true, proxy(() => Identifier)),
    new ObjectProperty("comment", false, proxy(() => stringType)),
    ...commonNodePropertiesSansParent,
]);
export const JSDocPublicTag = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocPublicTag)),
    // new ObjectProperty("parent", true, proxy(() => JSDocOrJSDocTypeLiteral)),
    new ObjectProperty("tagName", true, proxy(() => Identifier)),
    new ObjectProperty("comment", false, proxy(() => stringType)),
    ...commonNodePropertiesSansParent,
]);
export const JSDocPrivateTag = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocPrivateTag)),
    // new ObjectProperty("parent", true, proxy(() => JSDocOrJSDocTypeLiteral)),
    new ObjectProperty("tagName", true, proxy(() => Identifier)),
    new ObjectProperty("comment", false, proxy(() => stringType)),
    ...commonNodePropertiesSansParent,
]);
export const JSDocProtectedTag = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocProtectedTag)),
    // new ObjectProperty("parent", true, proxy(() => JSDocOrJSDocTypeLiteral)),
    new ObjectProperty("tagName", true, proxy(() => Identifier)),
    new ObjectProperty("comment", false, proxy(() => stringType)),
    ...commonNodePropertiesSansParent,
]);
export const JSDocReadonlyTag = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocReadonlyTag)),
    // new ObjectProperty("parent", true, proxy(() => JSDocOrJSDocTypeLiteral)),
    new ObjectProperty("tagName", true, proxy(() => Identifier)),
    new ObjectProperty("comment", false, proxy(() => stringType)),
    ...commonNodePropertiesSansParent,
]);
export const JSDocEnumTag = new ObjectType(Prototype.NodeObject, [
    // new ObjectProperty("parent", true, proxy(() => JSDoc)),
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocEnumTag)),
    new ObjectProperty("typeExpression", false, proxy(() => JSDocTypeExpression)),
    new ObjectProperty("tagName", true, proxy(() => Identifier)),
    new ObjectProperty("comment", false, proxy(() => stringType)),
    ...commonNodePropertiesSansParent,
]);
export const JSDocThisTag = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocThisTag)),
    new ObjectProperty("typeExpression", false, proxy(() => JSDocTypeExpression)),
    // new ObjectProperty("parent", true, proxy(() => JSDocOrJSDocTypeLiteral)),
    new ObjectProperty("tagName", true, proxy(() => Identifier)),
    new ObjectProperty("comment", false, proxy(() => stringType)),
    ...commonNodePropertiesSansParent,
]);
export const JSDocTypeTag = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocTypeTag)),
    new ObjectProperty("typeExpression", true, proxy(() => JSDocTypeExpression)),
    // new ObjectProperty("parent", true, proxy(() => JSDocOrJSDocTypeLiteral)),
    new ObjectProperty("tagName", true, proxy(() => Identifier)),
    new ObjectProperty("comment", false, proxy(() => stringType)),
    ...commonNodePropertiesSansParent,
]);
export const JSDocPropertyTag = new ObjectType(Prototype.NodeObject, [
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocPropertyTag)),
    // new ObjectProperty("parent", true, proxy(() => JSDoc)),
    new ObjectProperty("name", true, proxy(() => EntityName)),
    new ObjectProperty("typeExpression", false, proxy(() => JSDocTypeExpression)),
    new ObjectProperty("isNameFirst", true, proxy(() => booleanType)),
    new ObjectProperty("isBracketed", true, proxy(() => booleanType)),
    new ObjectProperty("tagName", true, proxy(() => Identifier)),
    new ObjectProperty("comment", false, proxy(() => stringType)),
    ...commonNodePropertiesSansParent,
]);
