import { proxy, ArrayType, AbstractType, IntersectionType, LiteralType, ObjectProperty, ObjectType, PrimitiveType, Type, UnionType, allTypes, unknownType } from './types';
import { booleanType, numberType, stringType } from './types';

const SyntaxKind_AbstractKeyword = new LiteralType(122);
const SyntaxKind_AsyncKeyword = new LiteralType(126);
const SyntaxKind_ConstKeyword = new LiteralType(81);
const SyntaxKind_DeclareKeyword = new LiteralType(130);
const SyntaxKind_DefaultKeyword = new LiteralType(84);
const SyntaxKind_ExportKeyword = new LiteralType(89);
const SyntaxKind_PublicKeyword = new LiteralType(119);
const SyntaxKind_PrivateKeyword = new LiteralType(117);
const SyntaxKind_ProtectedKeyword = new LiteralType(118);
const SyntaxKind_ReadonlyKeyword = new LiteralType(138);
const SyntaxKind_StaticKeyword = new LiteralType(120);
const SyntaxKind_Decorator = new LiteralType(157);
const SyntaxKind_Identifier = new LiteralType(75);
const SyntaxKind_StringLiteral = new LiteralType(10);
const SyntaxKind_NumericLiteral = new LiteralType(8);
const SyntaxKind_NoSubstitutionTemplateLiteral = new LiteralType(14);
const SyntaxKind_ComputedPropertyName = new LiteralType(154);
const SyntaxKind_PrivateIdentifier = new LiteralType(76);
const SyntaxKind_ElementAccessExpression = new LiteralType(195);
const SyntaxKind_QuestionDotToken = new LiteralType(28);
const SyntaxKind_ObjectBindingPattern = new LiteralType(189);
const SyntaxKind_Parameter = new LiteralType(156);
const SyntaxKind_CallSignature = new LiteralType(165);
const SyntaxKind_JSDocComment = new LiteralType(303);
const SyntaxKind_ConstructSignature = new LiteralType(166);
const SyntaxKind_JSDocTypeLiteral = new LiteralType(304);
const SyntaxKind_QualifiedName = new LiteralType(153);
const SyntaxKind_JSDocTypeExpression = new LiteralType(294);
const SyntaxKind_QuestionToken = new LiteralType(57);
const SyntaxKind_MethodSignature = new LiteralType(160);
const SyntaxKind_ClassDeclaration = new LiteralType(245);
const SyntaxKind_ClassExpression = new LiteralType(214);
const SyntaxKind_InterfaceDeclaration = new LiteralType(246);
const SyntaxKind_TypeLiteral = new LiteralType(173);
const SyntaxKind_PropertySignature = new LiteralType(158);
const SyntaxKind_ArrowFunction = new LiteralType(202);
const SyntaxKind_EqualsGreaterThanToken = new LiteralType(38);
const SyntaxKind_Block = new LiteralType(223);
const SyntaxKind_AsteriskToken = new LiteralType(41);
const SyntaxKind_ExclamationToken = new LiteralType(53);
const SyntaxKind_ParenthesizedExpression = new LiteralType(200);
const SyntaxKind_ObjectLiteralExpression = new LiteralType(193);
const SyntaxKind_SpreadAssignment = new LiteralType(283);
const SyntaxKind_ShorthandPropertyAssignment = new LiteralType(282);
const SyntaxKind_EqualsToken = new LiteralType(62);
const SyntaxKind_PropertyAssignment = new LiteralType(281);
const SyntaxKind_FunctionExpression = new LiteralType(201);
const SyntaxKind_LabeledStatement = new LiteralType(238);
const SyntaxKind_ExpressionStatement = new LiteralType(226);
const SyntaxKind_VariableStatement = new LiteralType(225);
const SyntaxKind_VariableDeclarationList = new LiteralType(243);
const SyntaxKind_ForStatement = new LiteralType(230);
const SyntaxKind_ForInStatement = new LiteralType(231);
const SyntaxKind_ForOfStatement = new LiteralType(232);
const SyntaxKind_AwaitKeyword = new LiteralType(127);
const SyntaxKind_FunctionDeclaration = new LiteralType(244);
const SyntaxKind_Constructor = new LiteralType(162);
const SyntaxKind_MethodDeclaration = new LiteralType(161);
const SyntaxKind_PropertyDeclaration = new LiteralType(159);
const SyntaxKind_GetAccessor = new LiteralType(163);
const SyntaxKind_SetAccessor = new LiteralType(164);
const SyntaxKind_TypeAliasDeclaration = new LiteralType(247);
const SyntaxKind_EnumMember = new LiteralType(284);
const SyntaxKind_EnumDeclaration = new LiteralType(248);
const SyntaxKind_ModuleDeclaration = new LiteralType(249);
const SyntaxKind_SourceFile = new LiteralType(290);
const SyntaxKind_EndOfFileToken = new LiteralType(1);
const SyntaxKind_ModuleBlock = new LiteralType(250);
const SyntaxKind_ImportEqualsDeclaration = new LiteralType(253);
const SyntaxKind_ExternalModuleReference = new LiteralType(265);
const SyntaxKind_IndexSignature = new LiteralType(167);
const SyntaxKind_FunctionType = new LiteralType(170);
const SyntaxKind_ConstructorType = new LiteralType(171);
const SyntaxKind_JSDocFunctionType = new LiteralType(300);
const SyntaxKind_ExportDeclaration = new LiteralType(260);
const SyntaxKind_NamespaceExport = new LiteralType(262);
const SyntaxKind_NamedExports = new LiteralType(261);
const SyntaxKind_DotDotDotToken = new LiteralType(25);
const SyntaxKind_ArrayBindingPattern = new LiteralType(190);
const SyntaxKind_VariableDeclaration = new LiteralType(242);
const SyntaxKind_CatchClause = new LiteralType(280);
const SyntaxKind_TryStatement = new LiteralType(240);
const SyntaxKind_BindingElement = new LiteralType(191);
const SyntaxKind_PropertyAccessExpression = new LiteralType(194);
const SyntaxKind_TypeParameter = new LiteralType(155);
const SyntaxKind_InferType = new LiteralType(181);
const SyntaxKind_JSDocTemplateTag = new LiteralType(320);
const SyntaxKind_HeritageClause = new LiteralType(279);
const SyntaxKind_ExpressionWithTypeArguments = new LiteralType(216);
const SyntaxKind_JSDocAugmentsTag = new LiteralType(307);
const SyntaxKind_OmittedExpression = new LiteralType(215);
const SyntaxKind_ExportSpecifier = new LiteralType(263);
const SyntaxKind_PartiallyEmittedExpression = new LiteralType(325);
const SyntaxKind_PrefixUnaryExpression = new LiteralType(207);
const SyntaxKind_PostfixUnaryExpression = new LiteralType(208);
const SyntaxKind_NullKeyword = new LiteralType(100);
const SyntaxKind_ThisKeyword = new LiteralType(104);
const SyntaxKind_SuperKeyword = new LiteralType(102);
const SyntaxKind_ImportKeyword = new LiteralType(96);
const SyntaxKind_DeleteExpression = new LiteralType(203);
const SyntaxKind_TypeOfExpression = new LiteralType(204);
const SyntaxKind_VoidExpression = new LiteralType(205);
const SyntaxKind_AwaitExpression = new LiteralType(206);
const SyntaxKind_YieldExpression = new LiteralType(212);
const SyntaxKind_SyntheticExpression = new LiteralType(220);
const SyntaxKind_AsteriskAsteriskToken = new LiteralType(42);
const SyntaxKind_BinaryExpression = new LiteralType(209);
const SyntaxKind_ArrayLiteralExpression = new LiteralType(192);
const SyntaxKind_SpreadElement = new LiteralType(213);
const SyntaxKind_CallExpression = new LiteralType(196);
const SyntaxKind_NewExpression = new LiteralType(197);
const SyntaxKind_ConditionalExpression = new LiteralType(210);
const SyntaxKind_ColonToken = new LiteralType(58);
const SyntaxKind_RegularExpressionLiteral = new LiteralType(13);
const SyntaxKind_BigIntLiteral = new LiteralType(9);
const SyntaxKind_TemplateHead = new LiteralType(15);
const SyntaxKind_TemplateExpression = new LiteralType(211);
const SyntaxKind_TemplateSpan = new LiteralType(221);
const SyntaxKind_TemplateMiddle = new LiteralType(16);
const SyntaxKind_TemplateTail = new LiteralType(17);
const SyntaxKind_TaggedTemplateExpression = new LiteralType(198);
const SyntaxKind_JsxOpeningElement = new LiteralType(268);
const SyntaxKind_JsxElement = new LiteralType(266);
const SyntaxKind_JsxClosingElement = new LiteralType(269);
const SyntaxKind_JsxAttributes = new LiteralType(274);
const SyntaxKind_JsxSelfClosingElement = new LiteralType(267);
const SyntaxKind_JsxAttribute = new LiteralType(273);
const SyntaxKind_JsxExpression = new LiteralType(276);
const SyntaxKind_JsxSpreadAttribute = new LiteralType(275);
const SyntaxKind_JsxFragment = new LiteralType(270);
const SyntaxKind_JsxOpeningFragment = new LiteralType(271);
const SyntaxKind_JsxClosingFragment = new LiteralType(272);
const SyntaxKind_JsxText = new LiteralType(11);
const SyntaxKind_AsExpression = new LiteralType(217);
const SyntaxKind_TypeAssertionExpression = new LiteralType(199);
const SyntaxKind_NonNullExpression = new LiteralType(218);
const SyntaxKind_MetaProperty = new LiteralType(219);
const SyntaxKind_NotEmittedStatement = new LiteralType(324);
const SyntaxKind_EndOfDeclarationMarker = new LiteralType(328);
const SyntaxKind_CommaListExpression = new LiteralType(326);
const SyntaxKind_MergeDeclarationMarker = new LiteralType(327);
const SyntaxKind_SyntheticReferenceExpression = new LiteralType(329);
const SyntaxKind_EmptyStatement = new LiteralType(224);
const SyntaxKind_DebuggerStatement = new LiteralType(241);
const SyntaxKind_MissingDeclaration = new LiteralType(264);
const SyntaxKind_CaseClause = new LiteralType(277);
const SyntaxKind_CaseBlock = new LiteralType(251);
const SyntaxKind_SwitchStatement = new LiteralType(237);
const SyntaxKind_DefaultClause = new LiteralType(278);
const SyntaxKind_IfStatement = new LiteralType(227);
const SyntaxKind_DoStatement = new LiteralType(228);
const SyntaxKind_WhileStatement = new LiteralType(229);
const SyntaxKind_BreakStatement = new LiteralType(234);
const SyntaxKind_ContinueStatement = new LiteralType(233);
const SyntaxKind_ReturnStatement = new LiteralType(235);
const SyntaxKind_WithStatement = new LiteralType(236);
const SyntaxKind_ThrowStatement = new LiteralType(239);
const SyntaxKind_JSDocTypedefTag = new LiteralType(321);
const SyntaxKind_JSDocCallbackTag = new LiteralType(314);
const SyntaxKind_JSDocSignature = new LiteralType(305);
const SyntaxKind_JSDocParameterTag = new LiteralType(316);
const SyntaxKind_JSDocReturnTag = new LiteralType(317);
const SyntaxKind_ImportDeclaration = new LiteralType(254);
const SyntaxKind_ImportClause = new LiteralType(255);
const SyntaxKind_NamespaceImport = new LiteralType(256);
const SyntaxKind_NamedImports = new LiteralType(257);
const SyntaxKind_ImportSpecifier = new LiteralType(258);
const SyntaxKind_NamespaceExportDeclaration = new LiteralType(252);
const SyntaxKind_ExportAssignment = new LiteralType(259);
const SyntaxKind_JSDocAllType = new LiteralType(295);
const SyntaxKind_JSDocUnknownType = new LiteralType(296);
const SyntaxKind_JSDocNonNullableType = new LiteralType(298);
const SyntaxKind_JSDocNullableType = new LiteralType(297);
const SyntaxKind_JSDocOptionalType = new LiteralType(299);
const SyntaxKind_JSDocVariadicType = new LiteralType(301);
const SyntaxKind_JSDocNamepathType = new LiteralType(302);
const SyntaxKind_JSDocTag = new LiteralType(306);
const SyntaxKind_JSDocAuthorTag = new LiteralType(308);
const SyntaxKind_JSDocClassTag = new LiteralType(309);
const SyntaxKind_JSDocPublicTag = new LiteralType(310);
const SyntaxKind_JSDocPrivateTag = new LiteralType(311);
const SyntaxKind_JSDocProtectedTag = new LiteralType(312);
const SyntaxKind_JSDocReadonlyTag = new LiteralType(313);
const SyntaxKind_JSDocEnumTag = new LiteralType(315);
const SyntaxKind_JSDocThisTag = new LiteralType(318);
const SyntaxKind_JSDocTypeTag = new LiteralType(319);
const SyntaxKind_JSDocPropertyTag = new LiteralType(322);

const NodeArray = new ArrayType(proxy(() => Node), [
    new ObjectProperty('pos', true, numberType),
    new ObjectProperty('end', true, numberType),
    new ObjectProperty('hasTrailingComma', false, booleanType),
    new ObjectProperty('transformFlags', false, numberType)
]);
const commonNodeProperties1 = [
    new ObjectProperty("flags", true, proxy(() => numberType)),
    new ObjectProperty("modifierFlagsCache", true, proxy(() => numberType)),
    new ObjectProperty("transformFlags", true, proxy(() => numberType)),
    new ObjectProperty("decorators", false, proxy(() => NodeArray)),
    new ObjectProperty("modifiers", false, proxy(() => ModifiersArray)),
    new ObjectProperty("id", false, proxy(() => numberType)),
];
const commonNodeProperties2 = [
    new ObjectProperty("original", false, proxy(() => Node)),
    new ObjectProperty("pos", true, proxy(() => numberType)),
    new ObjectProperty("end", true, proxy(() => numberType)),
];
const commonNodeProperties = [
    ...commonNodeProperties1,
    new ObjectProperty("parent", true, proxy(() => Node)),
    ...commonNodeProperties2
];
const commonNodePropertiesSansParent = [
    ...commonNodeProperties1,
    // parent goes here
    ...commonNodeProperties2
];

const Node = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => numberType)),
    ...commonNodeProperties,
]);

const ModifiersArray = new ArrayType(proxy(() => ModifierToken), []);
const AbstractKeywordToken = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_AbstractKeyword)),
    ...commonNodeProperties,
]);
const Token_SyntaxKind_AsyncKeyword_ = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_AsyncKeyword)),
    ...commonNodeProperties,
]);
const Token_SyntaxKind_ConstKeyword_ = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ConstKeyword)),
    ...commonNodeProperties,
]);
const Token_SyntaxKind_DeclareKeyword_ = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_DeclareKeyword)),
    ...commonNodeProperties,
]);
const Token_SyntaxKind_DefaultKeyword_ = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_DefaultKeyword)),
    ...commonNodeProperties,
]);
const Token_SyntaxKind_ExportKeyword_ = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ExportKeyword)),
    ...commonNodeProperties,
]);
const Token_SyntaxKind_PublicKeyword_ = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_PublicKeyword)),
    ...commonNodeProperties,
]);
const Token_SyntaxKind_PrivateKeyword_ = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_PrivateKeyword)),
    ...commonNodeProperties,
]);
const Token_SyntaxKind_ProtectedKeyword_ = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ProtectedKeyword)),
    ...commonNodeProperties,
]);
const Token_SyntaxKind_ReadonlyKeyword_ = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ReadonlyKeyword)),
    ...commonNodeProperties,
]);
const Token_SyntaxKind_StaticKeyword_ = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_StaticKeyword)),
    ...commonNodeProperties,
]);
const ModifierToken = new UnionType([

    proxy(() => AbstractKeywordToken),
    proxy(() => Token_SyntaxKind_AsyncKeyword_),
    proxy(() => Token_SyntaxKind_ConstKeyword_),
    proxy(() => Token_SyntaxKind_DeclareKeyword_),
    proxy(() => Token_SyntaxKind_DefaultKeyword_),
    proxy(() => Token_SyntaxKind_ExportKeyword_),
    proxy(() => Token_SyntaxKind_PublicKeyword_),
    proxy(() => Token_SyntaxKind_PrivateKeyword_),
    proxy(() => Token_SyntaxKind_ProtectedKeyword_),
    proxy(() => Token_SyntaxKind_ReadonlyKeyword_),
    proxy(() => Token_SyntaxKind_StaticKeyword_)

]);
const Decorator = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_Decorator)),
    new ObjectProperty("parent", true, proxy(() => NamedDeclaration)),
    new ObjectProperty("expression", true, proxy(() => LeftHandSideExpression)),
    ...commonNodePropertiesSansParent,
]);
const NamedDeclaration = new ObjectType([
    new ObjectProperty("name", false, proxy(() => DeclarationName)),
    new ObjectProperty("kind", true, proxy(() => numberType)),
    ...commonNodeProperties,
]);
const Identifier = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_Identifier)),
    new ObjectProperty("escapedText", true, proxy(() => stringType)),
    new ObjectProperty("originalKeywordKind", false, proxy(() => numberType)),
    new ObjectProperty("autoGenerateFlags", false, proxy(() => numberType)),
    new ObjectProperty("autoGenerateId", false, proxy(() => numberType)),
    new ObjectProperty("isInJSDocNamespace", false, proxy(() => booleanType)),
    new ObjectProperty("typeArguments", false, proxy(() => NodeArray)),
    new ObjectProperty("jsdocDotPos", false, proxy(() => numberType)),
    ...commonNodeProperties,
]);
const StringLiteral = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_StringLiteral)),
    new ObjectProperty("textSourceNode", false, proxy(() => StringLiteral_TextSourceNode)),
    new ObjectProperty("singleQuote", false, proxy(() => booleanType)),
    new ObjectProperty("text", true, proxy(() => stringType)),
    new ObjectProperty("isUnterminated", false, proxy(() => booleanType)),
    new ObjectProperty("hasExtendedUnicodeEscape", false, proxy(() => booleanType)),
    ...commonNodeProperties,
]);
const NumericLiteral = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_NumericLiteral)),
    new ObjectProperty("numericLiteralFlags", true, proxy(() => numberType)),
    new ObjectProperty("text", true, proxy(() => stringType)),
    new ObjectProperty("isUnterminated", false, proxy(() => booleanType)),
    new ObjectProperty("hasExtendedUnicodeEscape", false, proxy(() => booleanType)),
    ...commonNodeProperties,
]);
const NoSubstitutionTemplateLiteral = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_NoSubstitutionTemplateLiteral)),
    new ObjectProperty("templateFlags", false, proxy(() => numberType)),
    new ObjectProperty("text", true, proxy(() => stringType)),
    new ObjectProperty("isUnterminated", false, proxy(() => booleanType)),
    new ObjectProperty("hasExtendedUnicodeEscape", false, proxy(() => booleanType)),
    ...commonNodeProperties,
    new ObjectProperty("rawText", false, proxy(() => stringType)),
]);
const StringLiteral_TextSourceNode = new UnionType([

    proxy(() => Identifier),
    proxy(() => StringLiteral),
    proxy(() => NumericLiteral),
    proxy(() => NoSubstitutionTemplateLiteral)

]);
const ComputedPropertyName = new ObjectType([
    new ObjectProperty("parent", true, proxy(() => Declaration)),
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ComputedPropertyName)),
    new ObjectProperty("expression", true, proxy(() => Expression)),
    ...commonNodePropertiesSansParent,
]);
const Declaration = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => numberType)),
    ...commonNodeProperties,
]);
const Expression = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => numberType)),
    ...commonNodeProperties,
]);
const PrivateIdentifier = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_PrivateIdentifier)),
    new ObjectProperty("escapedText", true, proxy(() => stringType)),
    ...commonNodeProperties,
]);
const ElementAccessExpression = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ElementAccessExpression)),
    new ObjectProperty("expression", true, proxy(() => LeftHandSideExpression)),
    new ObjectProperty("questionDotToken", false, proxy(() => QuestionDotToken)),
    new ObjectProperty("argumentExpression", true, proxy(() => Expression)),
    ...commonNodeProperties,
]);
const LeftHandSideExpression = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => numberType)),
    ...commonNodeProperties,
]);
const QuestionDotToken = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_QuestionDotToken)),
    ...commonNodeProperties,
]);
const ObjectBindingPattern = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ObjectBindingPattern)),
    new ObjectProperty("parent", true, proxy(() => ObjectBindingPattern_Parent)),
    new ObjectProperty("elements", true, proxy(() => NodeArray)),
    ...commonNodePropertiesSansParent,
]);
const ParameterDeclaration = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_Parameter)),
    new ObjectProperty("parent", true, proxy(() => SignatureDeclaration)),
    new ObjectProperty("dotDotDotToken", false, proxy(() => DotDotDotToken)),
    new ObjectProperty("name", true, proxy(() => BindingName)),
    new ObjectProperty("questionToken", false, proxy(() => QuestionToken)),
    new ObjectProperty("type", false, proxy(() => TypeNode)),
    new ObjectProperty("initializer", false, proxy(() => Expression)),
    ...commonNodePropertiesSansParent,
    new ObjectProperty("jsDoc", false, proxy(() => Array_JSDoc)),
    new ObjectProperty("jsDocCache", false, proxy(() => Array_JSDocTag)),
]);
const CallSignatureDeclaration = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_CallSignature)),
    new ObjectProperty("name", false, proxy(() => PropertyName)),
    new ObjectProperty("typeParameters", false, proxy(() => NodeArray)),
    new ObjectProperty("parameters", true, proxy(() => NodeArray)),
    new ObjectProperty("type", false, proxy(() => TypeNode)),
    new ObjectProperty("typeArguments", false, proxy(() => NodeArray)),
    ...commonNodeProperties,
    new ObjectProperty("jsDoc", false, proxy(() => type61)),
    new ObjectProperty("jsDocCache", false, proxy(() => type299)),
    new ObjectProperty("questionToken", false, proxy(() => QuestionToken)),
]);
const PropertyName = new UnionType([

    proxy(() => Identifier),
    proxy(() => StringLiteral),
    proxy(() => NumericLiteral),
    proxy(() => ComputedPropertyName),
    proxy(() => PrivateIdentifier)

]);
const TypeNode = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => numberType)),
    ...commonNodeProperties,
]);
const type61 = new ArrayType(proxy(() => JSDoc), []);
const JSDoc = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocComment)),
    new ObjectProperty("parent", true, proxy(() => HasJSDoc)),
    new ObjectProperty("tags", false, proxy(() => NodeArray)),
    new ObjectProperty("comment", false, proxy(() => stringType)),
    ...commonNodePropertiesSansParent,
]);
const ConstructSignatureDeclaration = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ConstructSignature)),
    new ObjectProperty("name", false, proxy(() => PropertyName)),
    new ObjectProperty("typeParameters", false, proxy(() => NodeArray)),
    new ObjectProperty("parameters", true, proxy(() => NodeArray)),
    new ObjectProperty("type", false, proxy(() => TypeNode)),
    new ObjectProperty("typeArguments", false, proxy(() => NodeArray)),
    ...commonNodeProperties,
    new ObjectProperty("jsDoc", false, proxy(() => Array_JSDoc)),
    new ObjectProperty("jsDocCache", false, proxy(() => Array_JSDocTag)),
    new ObjectProperty("questionToken", false, proxy(() => QuestionToken)),
]);
const Array_JSDoc = new ArrayType(proxy(() => JSDoc), []);
const Array_JSDocTag = new ArrayType(proxy(() => JSDocTag), []);
const JSDocTag = new ObjectType([
    new ObjectProperty("parent", true, proxy(() => JSDocTag_Parent)),
    new ObjectProperty("tagName", true, proxy(() => Identifier)),
    new ObjectProperty("comment", false, proxy(() => stringType)),
    new ObjectProperty("kind", true, proxy(() => numberType)),
    ...commonNodePropertiesSansParent,
]);
const JSDocTypeLiteral = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocTypeLiteral)),
    new ObjectProperty("jsDocPropertyTags", false, proxy(() => Array_JSDocPropertyLikeTag)),
    new ObjectProperty("isArrayType", false, proxy(() => booleanType)),
    ...commonNodeProperties,
]);
const Array_JSDocPropertyLikeTag = new ArrayType(proxy(() => JSDocPropertyLikeTag), []);
const JSDocPropertyLikeTag = new ObjectType([
    new ObjectProperty("parent", true, proxy(() => JSDoc)),
    new ObjectProperty("name", true, proxy(() => EntityName)),
    new ObjectProperty("typeExpression", false, proxy(() => JSDocTypeExpression)),
    new ObjectProperty("isNameFirst", true, proxy(() => booleanType)),
    new ObjectProperty("isBracketed", true, proxy(() => booleanType)),
    new ObjectProperty("tagName", true, proxy(() => Identifier)),
    new ObjectProperty("comment", false, proxy(() => stringType)),
    new ObjectProperty("kind", true, proxy(() => numberType)),
    ...commonNodePropertiesSansParent,
]);
const QualifiedName = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_QualifiedName)),
    new ObjectProperty("left", true, proxy(() => EntityName)),
    new ObjectProperty("right", true, proxy(() => Identifier)),
    new ObjectProperty("jsdocDotPos", false, proxy(() => numberType)),
    ...commonNodeProperties,
]);
const EntityName = new UnionType([

    proxy(() => Identifier),
    proxy(() => QualifiedName)

]);
const JSDocTypeExpression = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocTypeExpression)),
    new ObjectProperty("type", true, proxy(() => TypeNode)),
    ...commonNodeProperties,
]);
const JSDocTag_Parent = new UnionType([

    proxy(() => JSDoc),
    proxy(() => JSDocTypeLiteral)

]);
const QuestionToken = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_QuestionToken)),
    ...commonNodeProperties,
]);
const MethodSignature = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_MethodSignature)),
    new ObjectProperty("parent", true, proxy(() => ObjectTypeDeclaration)),
    new ObjectProperty("name", true, proxy(() => PropertyName)),
    new ObjectProperty("typeParameters", false, proxy(() => NodeArray)),
    new ObjectProperty("parameters", true, proxy(() => NodeArray)),
    new ObjectProperty("type", false, proxy(() => TypeNode)),
    new ObjectProperty("typeArguments", false, proxy(() => NodeArray)),
    ...commonNodePropertiesSansParent,
    new ObjectProperty("jsDoc", false, proxy(() => type98)),
    new ObjectProperty("jsDocCache", false, proxy(() => type99)),
    new ObjectProperty("questionToken", false, proxy(() => QuestionToken)),
]);
const ClassDeclaration = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ClassDeclaration)),
    new ObjectProperty("name", false, proxy(() => Identifier)),
    new ObjectProperty("typeParameters", false, proxy(() => NodeArray)),
    new ObjectProperty("heritageClauses", false, proxy(() => NodeArray)),
    new ObjectProperty("members", true, proxy(() => NodeArray)),
    ...commonNodeProperties,
    new ObjectProperty("jsDoc", false, proxy(() => type85)),
    new ObjectProperty("jsDocCache", false, proxy(() => type86)),
]);
const type85 = new ArrayType(proxy(() => JSDoc), []);
const type86 = new ArrayType(proxy(() => JSDocTag), []);
const ClassExpression = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ClassExpression)),
    new ObjectProperty("name", false, proxy(() => Identifier)),
    new ObjectProperty("typeParameters", false, proxy(() => NodeArray)),
    new ObjectProperty("heritageClauses", false, proxy(() => NodeArray)),
    new ObjectProperty("members", true, proxy(() => NodeArray)),
    ...commonNodeProperties,
    new ObjectProperty("jsDoc", false, proxy(() => type89)),
    new ObjectProperty("jsDocCache", false, proxy(() => type90)),
]);
const type89 = new ArrayType(proxy(() => JSDoc), []);
const type90 = new ArrayType(proxy(() => JSDocTag), []);
const InterfaceDeclaration = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_InterfaceDeclaration)),
    new ObjectProperty("name", true, proxy(() => Identifier)),
    new ObjectProperty("typeParameters", false, proxy(() => NodeArray)),
    new ObjectProperty("heritageClauses", false, proxy(() => NodeArray)),
    new ObjectProperty("members", true, proxy(() => NodeArray)),
    ...commonNodeProperties,
    new ObjectProperty("jsDoc", false, proxy(() => type93)),
    new ObjectProperty("jsDocCache", false, proxy(() => type94)),
]);
const type93 = new ArrayType(proxy(() => JSDoc), []);
const type94 = new ArrayType(proxy(() => JSDocTag), []);
const TypeLiteralNode = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_TypeLiteral)),
    new ObjectProperty("members", true, proxy(() => NodeArray)),
    ...commonNodeProperties,
]);
const ObjectTypeDeclaration = new UnionType([

    proxy(() => ClassDeclaration),
    proxy(() => ClassExpression),
    proxy(() => InterfaceDeclaration),
    proxy(() => TypeLiteralNode)

]);
const type98 = new ArrayType(proxy(() => JSDoc), []);
const type99 = new ArrayType(proxy(() => JSDocTag), []);
const PropertySignature = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_PropertySignature)),
    new ObjectProperty("name", true, proxy(() => PropertyName)),
    new ObjectProperty("questionToken", false, proxy(() => QuestionToken)),
    new ObjectProperty("type", false, proxy(() => TypeNode)),
    new ObjectProperty("initializer", false, proxy(() => Expression)),
    ...commonNodeProperties,
    new ObjectProperty("jsDoc", false, proxy(() => type102)),
    new ObjectProperty("jsDocCache", false, proxy(() => type103)),
]);
const type102 = new ArrayType(proxy(() => JSDoc), []);
const type103 = new ArrayType(proxy(() => JSDocTag), []);
const ArrowFunction = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ArrowFunction)),
    new ObjectProperty("equalsGreaterThanToken", true, proxy(() => Token)),
    new ObjectProperty("body", true, proxy(() => ConciseBody)),
    ...commonNodeProperties,
    new ObjectProperty("asteriskToken", false, proxy(() => AsteriskToken)),
    new ObjectProperty("questionToken", false, proxy(() => QuestionToken)),
    new ObjectProperty("exclamationToken", false, proxy(() => ExclamationToken)),
    new ObjectProperty("endFlowNode", false, proxy(() => FlowNode)),
    new ObjectProperty("typeParameters", false, proxy(() => NodeArray)),
    new ObjectProperty("parameters", true, proxy(() => NodeArray)),
    new ObjectProperty("type", false, proxy(() => TypeNode)),
    new ObjectProperty("typeArguments", false, proxy(() => NodeArray)),
    new ObjectProperty("jsDoc", false, proxy(() => type116)),
    new ObjectProperty("jsDocCache", false, proxy(() => type117)),
]);
const Token = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_EqualsGreaterThanToken)),
    ...commonNodeProperties,
]);
const Block = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_Block)),
    new ObjectProperty("statements", true, proxy(() => NodeArray)),
    new ObjectProperty("multiLine", false, proxy(() => booleanType)),
    ...commonNodeProperties,
]);
const ConciseBody = new UnionType([

    proxy(() => Expression),
    proxy(() => Block)

]);
const AsteriskToken = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_AsteriskToken)),
    ...commonNodeProperties,
]);
const ExclamationToken = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ExclamationToken)),
    ...commonNodeProperties,
]);
const FlowNode = new ObjectType([
]);
const type116 = new ArrayType(proxy(() => JSDoc), []);
const type117 = new ArrayType(proxy(() => JSDocTag), []);
const ParenthesizedExpression = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ParenthesizedExpression)),
    new ObjectProperty("expression", true, proxy(() => Expression)),
    ...commonNodeProperties,
    new ObjectProperty("jsDoc", false, proxy(() => type120)),
    new ObjectProperty("jsDocCache", false, proxy(() => type121)),
]);
const type120 = new ArrayType(proxy(() => JSDoc), []);
const type121 = new ArrayType(proxy(() => JSDocTag), []);
const SpreadAssignment = new ObjectType([
    new ObjectProperty("parent", true, proxy(() => ObjectLiteralExpression)),
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_SpreadAssignment)),
    new ObjectProperty("expression", true, proxy(() => Expression)),
    new ObjectProperty("name", false, proxy(() => PropertyName)),
    ...commonNodePropertiesSansParent,
    new ObjectProperty("jsDoc", false, proxy(() => type126)),
    new ObjectProperty("jsDocCache", false, proxy(() => type127)),
]);
const ObjectLiteralExpression = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ObjectLiteralExpression)),
    new ObjectProperty("multiLine", false, proxy(() => booleanType)),
    new ObjectProperty("properties", true, proxy(() => NodeArray)),
    ...commonNodeProperties,
]);
const type126 = new ArrayType(proxy(() => JSDoc), []);
const type127 = new ArrayType(proxy(() => JSDocTag), []);
const ShorthandPropertyAssignment = new ObjectType([
    new ObjectProperty("parent", true, proxy(() => ObjectLiteralExpression)),
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ShorthandPropertyAssignment)),
    new ObjectProperty("name", true, proxy(() => Identifier)),
    new ObjectProperty("questionToken", false, proxy(() => QuestionToken)),
    new ObjectProperty("exclamationToken", false, proxy(() => ExclamationToken)),
    new ObjectProperty("equalsToken", false, proxy(() => Token_SyntaxKind_EqualsToken_)),
    new ObjectProperty("objectAssignmentInitializer", false, proxy(() => Expression)),
    ...commonNodePropertiesSansParent,
    new ObjectProperty("jsDoc", false, proxy(() => type132)),
    new ObjectProperty("jsDocCache", false, proxy(() => type133)),
]);
const Token_SyntaxKind_EqualsToken_ = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_EqualsToken)),
    ...commonNodeProperties,
]);
const type132 = new ArrayType(proxy(() => JSDoc), []);
const type133 = new ArrayType(proxy(() => JSDocTag), []);
const PropertyAssignment = new ObjectType([
    new ObjectProperty("parent", true, proxy(() => ObjectLiteralExpression)),
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_PropertyAssignment)),
    new ObjectProperty("name", true, proxy(() => PropertyName)),
    new ObjectProperty("questionToken", false, proxy(() => QuestionToken)),
    new ObjectProperty("initializer", true, proxy(() => Expression)),
    ...commonNodePropertiesSansParent,
    new ObjectProperty("jsDoc", false, proxy(() => type136)),
    new ObjectProperty("jsDocCache", false, proxy(() => type137)),
]);
const type136 = new ArrayType(proxy(() => JSDoc), []);
const type137 = new ArrayType(proxy(() => JSDocTag), []);
const FunctionExpression = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_FunctionExpression)),
    new ObjectProperty("name", false, proxy(() => Identifier)),
    new ObjectProperty("body", true, proxy(() => Block)),
    ...commonNodeProperties,
    new ObjectProperty("asteriskToken", false, proxy(() => AsteriskToken)),
    new ObjectProperty("questionToken", false, proxy(() => QuestionToken)),
    new ObjectProperty("exclamationToken", false, proxy(() => ExclamationToken)),
    new ObjectProperty("endFlowNode", false, proxy(() => FlowNode)),
    new ObjectProperty("typeParameters", false, proxy(() => NodeArray)),
    new ObjectProperty("parameters", true, proxy(() => NodeArray)),
    new ObjectProperty("type", false, proxy(() => TypeNode)),
    new ObjectProperty("typeArguments", false, proxy(() => NodeArray)),
    new ObjectProperty("jsDoc", false, proxy(() => type140)),
    new ObjectProperty("jsDocCache", false, proxy(() => type141)),
]);
const type140 = new ArrayType(proxy(() => JSDoc), []);
const type141 = new ArrayType(proxy(() => JSDocTag), []);
const LabeledStatement = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_LabeledStatement)),
    new ObjectProperty("label", true, proxy(() => Identifier)),
    new ObjectProperty("statement", true, proxy(() => Statement)),
    ...commonNodeProperties,
    new ObjectProperty("jsDoc", false, proxy(() => type145)),
    new ObjectProperty("jsDocCache", false, proxy(() => type146)),
]);
const Statement = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => numberType)),
    ...commonNodeProperties,
]);
const type145 = new ArrayType(proxy(() => JSDoc), []);
const type146 = new ArrayType(proxy(() => JSDocTag), []);
const ExpressionStatement = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ExpressionStatement)),
    new ObjectProperty("expression", true, proxy(() => Expression)),
    ...commonNodeProperties,
    new ObjectProperty("jsDoc", false, proxy(() => type149)),
    new ObjectProperty("jsDocCache", false, proxy(() => type150)),
]);
const type149 = new ArrayType(proxy(() => JSDoc), []);
const type150 = new ArrayType(proxy(() => JSDocTag), []);
const VariableStatement = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_VariableStatement)),
    new ObjectProperty("declarationList", true, proxy(() => VariableDeclarationList)),
    ...commonNodeProperties,
    new ObjectProperty("jsDoc", false, proxy(() => type165)),
    new ObjectProperty("jsDocCache", false, proxy(() => type166)),
]);
const VariableDeclarationList = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_VariableDeclarationList)),
    new ObjectProperty("parent", true, proxy(() => type164)),
    new ObjectProperty("declarations", true, proxy(() => NodeArray)),
    ...commonNodePropertiesSansParent,
]);
const ForStatement = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ForStatement)),
    new ObjectProperty("initializer", false, proxy(() => ForInitializer)),
    new ObjectProperty("condition", false, proxy(() => Expression)),
    new ObjectProperty("incrementor", false, proxy(() => Expression)),
    new ObjectProperty("statement", true, proxy(() => Statement)),
    ...commonNodeProperties,
]);
const ForInitializer = new UnionType([

    proxy(() => Expression),
    proxy(() => VariableDeclarationList)

]);
const ForInStatement = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ForInStatement)),
    new ObjectProperty("initializer", true, proxy(() => ForInitializer)),
    new ObjectProperty("expression", true, proxy(() => Expression)),
    new ObjectProperty("statement", true, proxy(() => Statement)),
    ...commonNodeProperties,
]);
const ForOfStatement = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ForOfStatement)),
    new ObjectProperty("awaitModifier", false, proxy(() => AwaitKeywordToken)),
    new ObjectProperty("initializer", true, proxy(() => ForInitializer)),
    new ObjectProperty("expression", true, proxy(() => Expression)),
    new ObjectProperty("statement", true, proxy(() => Statement)),
    ...commonNodeProperties,
]);
const AwaitKeywordToken = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_AwaitKeyword)),
    ...commonNodeProperties,
]);
const type164 = new UnionType([

    proxy(() => VariableStatement),
    proxy(() => ForStatement),
    proxy(() => ForInStatement),
    proxy(() => ForOfStatement)

]);
const type165 = new ArrayType(proxy(() => JSDoc), []);
const type166 = new ArrayType(proxy(() => JSDocTag), []);
const FunctionDeclaration = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_FunctionDeclaration)),
    new ObjectProperty("name", false, proxy(() => Identifier)),
    new ObjectProperty("body", false, proxy(() => Block)),
    new ObjectProperty("asteriskToken", false, proxy(() => AsteriskToken)),
    new ObjectProperty("questionToken", false, proxy(() => QuestionToken)),
    new ObjectProperty("exclamationToken", false, proxy(() => ExclamationToken)),
    new ObjectProperty("endFlowNode", false, proxy(() => FlowNode)),
    new ObjectProperty("typeParameters", false, proxy(() => NodeArray)),
    new ObjectProperty("parameters", true, proxy(() => NodeArray)),
    new ObjectProperty("type", false, proxy(() => TypeNode)),
    new ObjectProperty("typeArguments", false, proxy(() => NodeArray)),
    ...commonNodeProperties,
    new ObjectProperty("jsDoc", false, proxy(() => type169)),
    new ObjectProperty("jsDocCache", false, proxy(() => type170)),
]);
const type169 = new ArrayType(proxy(() => JSDoc), []);
const type170 = new ArrayType(proxy(() => JSDocTag), []);
const ConstructorDeclaration = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_Constructor)),
    new ObjectProperty("parent", true, proxy(() => ClassLikeDeclaration)),
    new ObjectProperty("body", false, proxy(() => Block)),
    new ObjectProperty("returnFlowNode", false, proxy(() => FlowNode)),
    new ObjectProperty("asteriskToken", false, proxy(() => AsteriskToken)),
    new ObjectProperty("questionToken", false, proxy(() => QuestionToken)),
    new ObjectProperty("exclamationToken", false, proxy(() => ExclamationToken)),
    new ObjectProperty("endFlowNode", false, proxy(() => FlowNode)),
    new ObjectProperty("name", false, proxy(() => PropertyName)),
    new ObjectProperty("typeParameters", false, proxy(() => NodeArray)),
    new ObjectProperty("parameters", true, proxy(() => NodeArray)),
    new ObjectProperty("type", false, proxy(() => TypeNode)),
    new ObjectProperty("typeArguments", false, proxy(() => NodeArray)),
    ...commonNodePropertiesSansParent,
    new ObjectProperty("jsDoc", false, proxy(() => type174)),
    new ObjectProperty("jsDocCache", false, proxy(() => type175)),
]);
const ClassLikeDeclaration = new UnionType([

    proxy(() => ClassDeclaration),
    proxy(() => ClassExpression)

]);
const type174 = new ArrayType(proxy(() => JSDoc), []);
const type175 = new ArrayType(proxy(() => JSDocTag), []);
const MethodDeclaration = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_MethodDeclaration)),
    new ObjectProperty("parent", true, proxy(() => type178)),
    new ObjectProperty("name", true, proxy(() => PropertyName)),
    new ObjectProperty("body", false, proxy(() => Block)),
    new ObjectProperty("asteriskToken", false, proxy(() => AsteriskToken)),
    new ObjectProperty("questionToken", false, proxy(() => QuestionToken)),
    new ObjectProperty("exclamationToken", false, proxy(() => ExclamationToken)),
    new ObjectProperty("endFlowNode", false, proxy(() => FlowNode)),
    new ObjectProperty("typeParameters", false, proxy(() => NodeArray)),
    new ObjectProperty("parameters", true, proxy(() => NodeArray)),
    new ObjectProperty("type", false, proxy(() => TypeNode)),
    new ObjectProperty("typeArguments", false, proxy(() => NodeArray)),
    ...commonNodePropertiesSansParent,
    new ObjectProperty("jsDoc", false, proxy(() => type179)),
    new ObjectProperty("jsDocCache", false, proxy(() => type180)),
]);
const type178 = new UnionType([

    proxy(() => ClassDeclaration),
    proxy(() => ClassExpression),
    proxy(() => ObjectLiteralExpression)

]);
const type179 = new ArrayType(proxy(() => JSDoc), []);
const type180 = new ArrayType(proxy(() => JSDocTag), []);
const PropertyDeclaration = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_PropertyDeclaration)),
    new ObjectProperty("parent", true, proxy(() => ClassLikeDeclaration)),
    new ObjectProperty("name", true, proxy(() => PropertyName)),
    new ObjectProperty("questionToken", false, proxy(() => QuestionToken)),
    new ObjectProperty("exclamationToken", false, proxy(() => ExclamationToken)),
    new ObjectProperty("type", false, proxy(() => TypeNode)),
    new ObjectProperty("initializer", false, proxy(() => Expression)),
    ...commonNodePropertiesSansParent,
    new ObjectProperty("jsDoc", false, proxy(() => type183)),
    new ObjectProperty("jsDocCache", false, proxy(() => type184)),
]);
const type183 = new ArrayType(proxy(() => JSDoc), []);
const type184 = new ArrayType(proxy(() => JSDocTag), []);
const GetAccessorDeclaration = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_GetAccessor)),
    new ObjectProperty("parent", true, proxy(() => type187)),
    new ObjectProperty("name", true, proxy(() => PropertyName)),
    new ObjectProperty("body", false, proxy(() => Block)),
    new ObjectProperty("asteriskToken", false, proxy(() => AsteriskToken)),
    new ObjectProperty("questionToken", false, proxy(() => QuestionToken)),
    new ObjectProperty("exclamationToken", false, proxy(() => ExclamationToken)),
    new ObjectProperty("endFlowNode", false, proxy(() => FlowNode)),
    new ObjectProperty("typeParameters", false, proxy(() => NodeArray)),
    new ObjectProperty("parameters", true, proxy(() => NodeArray)),
    new ObjectProperty("type", false, proxy(() => TypeNode)),
    new ObjectProperty("typeArguments", false, proxy(() => NodeArray)),
    ...commonNodePropertiesSansParent,
    new ObjectProperty("jsDoc", false, proxy(() => type188)),
    new ObjectProperty("jsDocCache", false, proxy(() => type189)),
]);
const type187 = new UnionType([
    proxy(() => ClassDeclaration),
    proxy(() => ClassExpression),
    proxy(() => ObjectLiteralExpression)
]);
const type188 = new ArrayType(proxy(() => JSDoc), []);
const type189 = new ArrayType(proxy(() => JSDocTag), []);
const SetAccessorDeclaration = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_SetAccessor)),
    new ObjectProperty("parent", true, proxy(() => type192)),
    new ObjectProperty("name", true, proxy(() => PropertyName)),
    new ObjectProperty("body", false, proxy(() => Block)),
    new ObjectProperty("asteriskToken", false, proxy(() => AsteriskToken)),
    new ObjectProperty("questionToken", false, proxy(() => QuestionToken)),
    new ObjectProperty("exclamationToken", false, proxy(() => ExclamationToken)),
    new ObjectProperty("endFlowNode", false, proxy(() => FlowNode)),
    new ObjectProperty("typeParameters", false, proxy(() => NodeArray)),
    new ObjectProperty("parameters", true, proxy(() => NodeArray)),
    new ObjectProperty("type", false, proxy(() => TypeNode)),
    new ObjectProperty("typeArguments", false, proxy(() => NodeArray)),
    ...commonNodePropertiesSansParent,
    new ObjectProperty("jsDoc", false, proxy(() => type193)),
    new ObjectProperty("jsDocCache", false, proxy(() => type194)),
]);
const type192 = new UnionType([
    proxy(() => ClassDeclaration),
    proxy(() => ClassExpression),
    proxy(() => ObjectLiteralExpression)
]);
const type193 = new ArrayType(proxy(() => JSDoc), []);
const type194 = new ArrayType(proxy(() => JSDocTag), []);
const TypeAliasDeclaration = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_TypeAliasDeclaration)),
    new ObjectProperty("name", true, proxy(() => Identifier)),
    new ObjectProperty("typeParameters", false, proxy(() => NodeArray)),
    new ObjectProperty("type", true, proxy(() => TypeNode)),
    ...commonNodeProperties,
    new ObjectProperty("jsDoc", false, proxy(() => type197)),
    new ObjectProperty("jsDocCache", false, proxy(() => type198)),
]);
const type197 = new ArrayType(proxy(() => JSDoc), []);
const type198 = new ArrayType(proxy(() => JSDocTag), []);
const EnumMember = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_EnumMember)),
    new ObjectProperty("parent", true, proxy(() => EnumDeclaration)),
    new ObjectProperty("name", true, proxy(() => PropertyName)),
    new ObjectProperty("initializer", false, proxy(() => Expression)),
    ...commonNodePropertiesSansParent,
    new ObjectProperty("jsDoc", false, proxy(() => type205)),
    new ObjectProperty("jsDocCache", false, proxy(() => type206)),
]);
const EnumDeclaration = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_EnumDeclaration)),
    new ObjectProperty("name", true, proxy(() => Identifier)),
    new ObjectProperty("members", true, proxy(() => NodeArray)),
    ...commonNodeProperties,
    new ObjectProperty("jsDoc", false, proxy(() => type203)),
    new ObjectProperty("jsDocCache", false, proxy(() => type204)),
]);
const type203 = new ArrayType(proxy(() => JSDoc), []);
const type204 = new ArrayType(proxy(() => JSDocTag), []);
const type205 = new ArrayType(proxy(() => JSDoc), []);
const type206 = new ArrayType(proxy(() => JSDocTag), []);
const ModuleDeclaration = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ModuleDeclaration)),
    new ObjectProperty("parent", true, proxy(() => type253)),
    new ObjectProperty("name", true, proxy(() => ModuleName)),
    new ObjectProperty("body", false, proxy(() => type255)),
    ...commonNodePropertiesSansParent,
    new ObjectProperty("jsDoc", false, proxy(() => type256)),
    new ObjectProperty("jsDocCache", false, proxy(() => type257)),
]);
const SourceFile = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_SourceFile)),
    new ObjectProperty("statements", true, proxy(() => NodeArray)),
    new ObjectProperty("endOfFileToken", true, proxy(() => EndOfFileToken)),
    new ObjectProperty("fileName", true, proxy(() => stringType)),
    new ObjectProperty("path", true, proxy(() => Path)),
    new ObjectProperty("text", true, proxy(() => stringType)),
    new ObjectProperty("resolvedPath", true, proxy(() => Path)),
    new ObjectProperty("originalFileName", true, proxy(() => stringType)),
    new ObjectProperty("redirectInfo", false, proxy(() => RedirectInfo)),
    new ObjectProperty("amdDependencies", true, proxy(() => type216)),
    new ObjectProperty("moduleName", false, proxy(() => stringType)),
    new ObjectProperty("referencedFiles", true, proxy(() => type218)),
    new ObjectProperty("typeReferenceDirectives", true, proxy(() => type220)),
    new ObjectProperty("libReferenceDirectives", true, proxy(() => type221)),
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
    new ObjectProperty("parseDiagnostics", true, proxy(() => type225)),
    new ObjectProperty("bindDiagnostics", true, proxy(() => type234)),
    new ObjectProperty("bindSuggestionDiagnostics", false, proxy(() => type235)),
    new ObjectProperty("jsDocDiagnostics", false, proxy(() => type236)),
    new ObjectProperty("additionalSyntacticDiagnostics", false, proxy(() => type237)),
    new ObjectProperty("lineMap", true, proxy(() => type238)),
    new ObjectProperty("checkJsDirective", false, proxy(() => CheckJsDirective)),
    new ObjectProperty("version", true, proxy(() => stringType)),
    new ObjectProperty("pragmas", true, proxy(() => ReadonlyPragmaMap)),
    new ObjectProperty("localJsxNamespace", false, proxy(() => stringType)),
    new ObjectProperty("localJsxFactory", false, proxy(() => EntityName)),
    ...commonNodeProperties,
]);
const EndOfFileToken = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_EndOfFileToken)),
    ...commonNodeProperties,
]);
const type213 = new ObjectType([
]);
const Path = new IntersectionType([proxy(() => type213),
proxy(() => stringType)]);
const RedirectInfo = new ObjectType([
    new ObjectProperty("redirectTarget", true, proxy(() => SourceFile)),
    new ObjectProperty("unredirected", true, proxy(() => SourceFile)),
]);
const type216 = new ArrayType(proxy(() => AmdDependency), []);
const AmdDependency = new ObjectType([
    new ObjectProperty("path", true, proxy(() => stringType)),
    new ObjectProperty("name", false, proxy(() => stringType)),
]);
const type218 = new ArrayType(proxy(() => FileReference), []);
const FileReference = new ObjectType([
    new ObjectProperty("fileName", true, proxy(() => stringType)),
    new ObjectProperty("pos", true, proxy(() => numberType)),
    new ObjectProperty("end", true, proxy(() => numberType)),
]);
const type220 = new ArrayType(proxy(() => FileReference), []);
const type221 = new ArrayType(proxy(() => FileReference), []);
const ReadonlyMap_string_ = new ObjectType([
    new ObjectProperty("size", true, proxy(() => numberType)),
]);
const SymbolTable = new ObjectType([
]);
const Map = new ObjectType([
    new ObjectProperty("size", true, proxy(() => numberType)),
]);
const type225 = new ArrayType(proxy(() => DiagnosticWithLocation), []);
const DiagnosticWithLocation = new ObjectType([
    new ObjectProperty("file", true, proxy(() => SourceFile)),
    new ObjectProperty("start", true, proxy(() => numberType)),
    new ObjectProperty("length", true, proxy(() => numberType)),
    new ObjectProperty("reportsUnnecessary", false, proxy(() => type227)),
    new ObjectProperty("source", false, proxy(() => stringType)),
    new ObjectProperty("relatedInformation", false, proxy(() => type228)),
    new ObjectProperty("category", true, proxy(() => numberType)),
    new ObjectProperty("code", true, proxy(() => numberType)),
    new ObjectProperty("messageText", true, proxy(() => type233)),
]);
const type227 = new ObjectType([
]);
const type228 = new ArrayType(proxy(() => DiagnosticRelatedInformation), []);
const DiagnosticRelatedInformation = new ObjectType([
    new ObjectProperty("category", true, proxy(() => numberType)),
    new ObjectProperty("code", true, proxy(() => numberType)),
    new ObjectProperty("file", false, proxy(() => SourceFile)),
    new ObjectProperty("start", false, proxy(() => numberType)),
    new ObjectProperty("length", false, proxy(() => numberType)),
    new ObjectProperty("messageText", true, proxy(() => type232)),
]);
const DiagnosticMessageChain = new ObjectType([
    new ObjectProperty("messageText", true, proxy(() => stringType)),
    new ObjectProperty("category", true, proxy(() => numberType)),
    new ObjectProperty("code", true, proxy(() => numberType)),
    new ObjectProperty("next", false, proxy(() => type231)),
]);
const type231 = new ArrayType(proxy(() => DiagnosticMessageChain), []);
const type232 = new UnionType([
    proxy(() => DiagnosticMessageChain),
    proxy(() => stringType)
]);
const type233 = new UnionType([
    proxy(() => DiagnosticMessageChain),
    proxy(() => stringType)
]);
const type234 = new ArrayType(proxy(() => DiagnosticWithLocation), []);
const type235 = new ArrayType(proxy(() => DiagnosticWithLocation), []);
const type236 = new ArrayType(proxy(() => DiagnosticWithLocation), []);
const type237 = new ArrayType(proxy(() => DiagnosticWithLocation), []);
const type238 = new ArrayType(proxy(() => numberType), []);
const CheckJsDirective = new ObjectType([
    new ObjectProperty("enabled", true, proxy(() => booleanType)),
    new ObjectProperty("pos", true, proxy(() => numberType)),
    new ObjectProperty("end", true, proxy(() => numberType)),
]);
const ReadonlyPragmaMap = new ObjectType([
    new ObjectProperty("size", true, proxy(() => numberType)),
]);
const ModuleBlock = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ModuleBlock)),
    new ObjectProperty("parent", true, proxy(() => ModuleDeclaration)),
    new ObjectProperty("statements", true, proxy(() => NodeArray)),
    ...commonNodePropertiesSansParent,
]);
const NamespaceDeclaration = new ObjectType([
    new ObjectProperty("name", true, proxy(() => Identifier)),
    new ObjectProperty("body", true, proxy(() => NamespaceBody)),
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ModuleDeclaration)),
    new ObjectProperty("parent", true, proxy(() => type250)),
    ...commonNodePropertiesSansParent,
    new ObjectProperty("jsDoc", false, proxy(() => type251)),
    new ObjectProperty("jsDocCache", false, proxy(() => type252)),
]);
const NamespaceBody = new UnionType([
    proxy(() => ModuleBlock),
    proxy(() => NamespaceDeclaration)
]);
const JSDocNamespaceDeclaration = new ObjectType([
    new ObjectProperty("name", true, proxy(() => Identifier)),
    new ObjectProperty("body", false, proxy(() => JSDocNamespaceBody)),
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ModuleDeclaration)),
    new ObjectProperty("parent", true, proxy(() => type247)),
    ...commonNodePropertiesSansParent,
    new ObjectProperty("jsDoc", false, proxy(() => type248)),
    new ObjectProperty("jsDocCache", false, proxy(() => type249)),
]);
const JSDocNamespaceBody = new UnionType([
    proxy(() => Identifier),
    proxy(() => JSDocNamespaceDeclaration)
]);
const type247 = new UnionType([
    proxy(() => Identifier),
    proxy(() => SourceFile),
    proxy(() => ModuleBlock),
    proxy(() => NamespaceDeclaration),
    proxy(() => JSDocNamespaceDeclaration)
]);
const type248 = new ArrayType(proxy(() => JSDoc), []);
const type249 = new ArrayType(proxy(() => JSDocTag), []);
const type250 = new UnionType([
    proxy(() => Identifier),
    proxy(() => SourceFile),
    proxy(() => ModuleBlock),
    proxy(() => NamespaceDeclaration),
    proxy(() => JSDocNamespaceDeclaration)
]);
const type251 = new ArrayType(proxy(() => JSDoc), []);
const type252 = new ArrayType(proxy(() => JSDocTag), []);
const type253 = new UnionType([
    proxy(() => Identifier),
    proxy(() => SourceFile),
    proxy(() => ModuleBlock),
    proxy(() => NamespaceDeclaration),
    proxy(() => JSDocNamespaceDeclaration)
]);
const ModuleName = new UnionType([
    proxy(() => Identifier),
    proxy(() => StringLiteral)
]);
const type255 = new UnionType([
    proxy(() => Identifier),
    proxy(() => ModuleBlock),
    proxy(() => NamespaceDeclaration),
    proxy(() => JSDocNamespaceDeclaration)
]);
const type256 = new ArrayType(proxy(() => JSDoc), []);
const type257 = new ArrayType(proxy(() => JSDocTag), []);
const ImportEqualsDeclaration = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ImportEqualsDeclaration)),
    new ObjectProperty("parent", true, proxy(() => type260)),
    new ObjectProperty("name", true, proxy(() => Identifier)),
    new ObjectProperty("moduleReference", true, proxy(() => ModuleReference)),
    ...commonNodePropertiesSansParent,
    new ObjectProperty("jsDoc", false, proxy(() => type264)),
    new ObjectProperty("jsDocCache", false, proxy(() => type265)),
]);
const type260 = new UnionType([
    proxy(() => SourceFile),
    proxy(() => ModuleBlock)
]);
const ExternalModuleReference = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ExternalModuleReference)),
    new ObjectProperty("parent", true, proxy(() => ImportEqualsDeclaration)),
    new ObjectProperty("expression", true, proxy(() => Expression)),
    ...commonNodePropertiesSansParent,
]);
const ModuleReference = new UnionType([
    proxy(() => Identifier),
    proxy(() => QualifiedName),
    proxy(() => ExternalModuleReference)
]);
const type264 = new ArrayType(proxy(() => JSDoc), []);
const type265 = new ArrayType(proxy(() => JSDocTag), []);
const IndexSignatureDeclaration = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_IndexSignature)),
    new ObjectProperty("parent", true, proxy(() => ObjectTypeDeclaration)),
    new ObjectProperty("name", false, proxy(() => PropertyName)),
    new ObjectProperty("typeParameters", false, proxy(() => NodeArray)),
    new ObjectProperty("parameters", true, proxy(() => NodeArray)),
    new ObjectProperty("type", false, proxy(() => TypeNode)),
    new ObjectProperty("typeArguments", false, proxy(() => NodeArray)),
    ...commonNodePropertiesSansParent,
    new ObjectProperty("jsDoc", false, proxy(() => type268)),
    new ObjectProperty("jsDocCache", false, proxy(() => type269)),
    new ObjectProperty("questionToken", false, proxy(() => QuestionToken)),
]);
const type268 = new ArrayType(proxy(() => JSDoc), []);
const type269 = new ArrayType(proxy(() => JSDocTag), []);
const FunctionTypeNode = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_FunctionType)),
    new ObjectProperty("type", true, proxy(() => TypeNode)),
    ...commonNodeProperties,
    new ObjectProperty("name", false, proxy(() => PropertyName)),
    new ObjectProperty("typeParameters", false, proxy(() => NodeArray)),
    new ObjectProperty("parameters", true, proxy(() => NodeArray)),
    new ObjectProperty("typeArguments", false, proxy(() => NodeArray)),
    new ObjectProperty("jsDoc", false, proxy(() => type272)),
    new ObjectProperty("jsDocCache", false, proxy(() => type273)),
]);
const type272 = new ArrayType(proxy(() => JSDoc), []);
const type273 = new ArrayType(proxy(() => JSDocTag), []);
const ConstructorTypeNode = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ConstructorType)),
    new ObjectProperty("type", true, proxy(() => TypeNode)),
    ...commonNodeProperties,
    new ObjectProperty("name", false, proxy(() => PropertyName)),
    new ObjectProperty("typeParameters", false, proxy(() => NodeArray)),
    new ObjectProperty("parameters", true, proxy(() => NodeArray)),
    new ObjectProperty("typeArguments", false, proxy(() => NodeArray)),
    new ObjectProperty("jsDoc", false, proxy(() => type276)),
    new ObjectProperty("jsDocCache", false, proxy(() => type277)),
]);
const type276 = new ArrayType(proxy(() => JSDoc), []);
const type277 = new ArrayType(proxy(() => JSDocTag), []);
const JSDocFunctionType = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocFunctionType)),
    ...commonNodeProperties,
    new ObjectProperty("name", false, proxy(() => PropertyName)),
    new ObjectProperty("typeParameters", false, proxy(() => NodeArray)),
    new ObjectProperty("parameters", true, proxy(() => NodeArray)),
    new ObjectProperty("type", false, proxy(() => TypeNode)),
    new ObjectProperty("typeArguments", false, proxy(() => NodeArray)),
    new ObjectProperty("jsDoc", false, proxy(() => type280)),
    new ObjectProperty("jsDocCache", false, proxy(() => type281)),
]);
const type280 = new ArrayType(proxy(() => JSDoc), []);
const type281 = new ArrayType(proxy(() => JSDocTag), []);
const ExportDeclaration = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ExportDeclaration)),
    new ObjectProperty("parent", true, proxy(() => type284)),
    new ObjectProperty("isTypeOnly", true, proxy(() => booleanType)),
    new ObjectProperty("exportClause", false, proxy(() => NamedExportBindings)),
    new ObjectProperty("moduleSpecifier", false, proxy(() => Expression)),
    new ObjectProperty("name", false, proxy(() => type290)),
    ...commonNodePropertiesSansParent,
    new ObjectProperty("jsDoc", false, proxy(() => type291)),
    new ObjectProperty("jsDocCache", false, proxy(() => type292)),
]);
const type284 = new UnionType([
    proxy(() => SourceFile),
    proxy(() => ModuleBlock)
]);
const NamespaceExport = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_NamespaceExport)),
    new ObjectProperty("parent", true, proxy(() => ExportDeclaration)),
    new ObjectProperty("name", true, proxy(() => Identifier)),
    ...commonNodePropertiesSansParent,
]);
const NamedExports = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_NamedExports)),
    new ObjectProperty("parent", true, proxy(() => ExportDeclaration)),
    new ObjectProperty("elements", true, proxy(() => NodeArray)),
    ...commonNodePropertiesSansParent,
]);
const NamedExportBindings = new UnionType([
    proxy(() => NamespaceExport),
    proxy(() => NamedExports)
]);
const type290 = new UnionType([
    proxy(() => Identifier),
    proxy(() => StringLiteral),
    proxy(() => NumericLiteral)
]);
const type291 = new ArrayType(proxy(() => JSDoc), []);
const type292 = new ArrayType(proxy(() => JSDocTag), []);
const Token_SyntaxKind_EndOfFileToken_ = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_EndOfFileToken)),
    ...commonNodeProperties,
]);
const JSDocContainer = new ObjectType([
    new ObjectProperty("jsDoc", false, proxy(() => Array_JSDoc)),
    new ObjectProperty("jsDocCache", false, proxy(() => Array_JSDocTag)),
]);
const intersection297 = new IntersectionType([proxy(() => Token_SyntaxKind_EndOfFileToken_),
proxy(() => JSDocContainer)]);
const HasJSDoc = new UnionType([
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
    proxy(() => intersection297)
]);
const type299 = new ArrayType(proxy(() => JSDocTag), []);
const SignatureDeclaration = new UnionType([
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
const DotDotDotToken = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_DotDotDotToken)),
    ...commonNodeProperties,
]);
const ArrayBindingPattern = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ArrayBindingPattern)),
    new ObjectProperty("parent", true, proxy(() => type315)),
    new ObjectProperty("elements", true, proxy(() => NodeArray)),
    ...commonNodePropertiesSansParent,
]);
const VariableDeclaration = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_VariableDeclaration)),
    new ObjectProperty("parent", true, proxy(() => type311)),
    new ObjectProperty("name", true, proxy(() => BindingName)),
    new ObjectProperty("exclamationToken", false, proxy(() => ExclamationToken)),
    new ObjectProperty("type", false, proxy(() => TypeNode)),
    new ObjectProperty("initializer", false, proxy(() => Expression)),
    ...commonNodePropertiesSansParent,
]);
const CatchClause = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_CatchClause)),
    new ObjectProperty("parent", true, proxy(() => TryStatement)),
    new ObjectProperty("variableDeclaration", false, proxy(() => VariableDeclaration)),
    new ObjectProperty("block", true, proxy(() => Block)),
    ...commonNodePropertiesSansParent,
]);
const TryStatement = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_TryStatement)),
    new ObjectProperty("tryBlock", true, proxy(() => Block)),
    new ObjectProperty("catchClause", false, proxy(() => CatchClause)),
    new ObjectProperty("finallyBlock", false, proxy(() => Block)),
    ...commonNodeProperties,
]);
const type311 = new UnionType([
    proxy(() => VariableDeclarationList),
    proxy(() => CatchClause)
]);
const BindingElement = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_BindingElement)),
    new ObjectProperty("parent", true, proxy(() => BindingPattern)),
    new ObjectProperty("propertyName", false, proxy(() => PropertyName)),
    new ObjectProperty("dotDotDotToken", false, proxy(() => DotDotDotToken)),
    new ObjectProperty("name", true, proxy(() => BindingName)),
    new ObjectProperty("initializer", false, proxy(() => Expression)),
    ...commonNodePropertiesSansParent,
]);
const BindingPattern = new UnionType([
    proxy(() => ObjectBindingPattern),
    proxy(() => ArrayBindingPattern)
]);
const type315 = new UnionType([
    proxy(() => ParameterDeclaration),
    proxy(() => VariableDeclaration),
    proxy(() => BindingElement)
]);
const BindingName = new UnionType([
    proxy(() => Identifier),
    proxy(() => ObjectBindingPattern),
    proxy(() => ArrayBindingPattern)
]);
const ObjectBindingPattern_Parent = new UnionType([
    proxy(() => ParameterDeclaration),
    proxy(() => VariableDeclaration),
    proxy(() => BindingElement)
]);
const PropertyAccessEntityNameExpression = new ObjectType([
    new ObjectProperty("expression", true, proxy(() => EntityNameExpression)),
    new ObjectProperty("name", true, proxy(() => Identifier)),
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_PropertyAccessExpression)),
    new ObjectProperty("questionDotToken", false, proxy(() => QuestionDotToken)),
    ...commonNodeProperties,
]);
const EntityNameExpression = new UnionType([
    proxy(() => Identifier),
    proxy(() => PropertyAccessEntityNameExpression)
]);
const DeclarationName = new UnionType([
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
const TypeParameterDeclaration = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_TypeParameter)),
    new ObjectProperty("parent", true, proxy(() => TypeParameterDeclaration_Parent)),
    new ObjectProperty("name", true, proxy(() => Identifier)),
    new ObjectProperty("constraint", false, proxy(() => TypeNode)),
    new ObjectProperty("default", false, proxy(() => TypeNode)),
    new ObjectProperty("expression", false, proxy(() => Expression)),
    ...commonNodePropertiesSansParent,
]);
const InferTypeNode = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_InferType)),
    new ObjectProperty("typeParameter", true, proxy(() => TypeParameterDeclaration)),
    ...commonNodeProperties,
]);
const JSDocTemplateTag = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocTemplateTag)),
    new ObjectProperty("constraint", false, proxy(() => JSDocTypeExpression)),
    new ObjectProperty("typeParameters", true, proxy(() => NodeArray)),
    new ObjectProperty("parent", true, proxy(() => JSDocTemplateTag_Parent)),
    new ObjectProperty("tagName", true, proxy(() => Identifier)),
    new ObjectProperty("comment", false, proxy(() => stringType)),
    ...commonNodePropertiesSansParent,
]);
const JSDocTemplateTag_Parent = new UnionType([
    proxy(() => JSDoc),
    proxy(() => JSDocTypeLiteral)
]);
const TypeParameterDeclaration_Parent = new UnionType([
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
const HeritageClause = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_HeritageClause)),
    new ObjectProperty("parent", true, proxy(() => type334)),
    new ObjectProperty("token", true, proxy(() => numberType)),
    new ObjectProperty("types", true, proxy(() => NodeArray)),
    ...commonNodePropertiesSansParent,
]);
const type334 = new UnionType([
    proxy(() => ClassDeclaration),
    proxy(() => ClassExpression),
    proxy(() => InterfaceDeclaration)
]);
const ClassElement = new ObjectType([
    new ObjectProperty("name", false, proxy(() => PropertyName)),
    new ObjectProperty("kind", true, proxy(() => numberType)),
    ...commonNodeProperties,
]);
const TypeElement = new ObjectType([
    new ObjectProperty("name", false, proxy(() => PropertyName)),
    new ObjectProperty("questionToken", false, proxy(() => QuestionToken)),
    new ObjectProperty("kind", true, proxy(() => numberType)),
    ...commonNodeProperties,
]);
const ExpressionWithTypeArguments = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ExpressionWithTypeArguments)),
    new ObjectProperty("parent", true, proxy(() => type345)),
    new ObjectProperty("expression", true, proxy(() => LeftHandSideExpression)),
    new ObjectProperty("typeArguments", false, proxy(() => NodeArray)),
    ...commonNodePropertiesSansParent,
]);
const JSDocAugmentsTag = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocAugmentsTag)),
    new ObjectProperty("class", true, proxy(() => intersection343)),
    new ObjectProperty("parent", true, proxy(() => type344)),
    new ObjectProperty("tagName", true, proxy(() => Identifier)),
    new ObjectProperty("comment", false, proxy(() => stringType)),
    ...commonNodePropertiesSansParent,
]);
const type341 = new ObjectType([
    new ObjectProperty("expression", true, proxy(() => type342)),
]);
const type342 = new UnionType([
    proxy(() => Identifier),
    proxy(() => PropertyAccessEntityNameExpression)
]);
const intersection343 = new IntersectionType([proxy(() => ExpressionWithTypeArguments),
proxy(() => type341)]);
const type344 = new UnionType([
    proxy(() => JSDoc),
    proxy(() => JSDocTypeLiteral)
]);
const type345 = new UnionType([
    proxy(() => HeritageClause),
    proxy(() => JSDocAugmentsTag)
]);
const OmittedExpression = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_OmittedExpression)),
    ...commonNodeProperties,
]);
const ExportSpecifier = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ExportSpecifier)),
    new ObjectProperty("parent", true, proxy(() => NamedExports)),
    new ObjectProperty("propertyName", false, proxy(() => Identifier)),
    new ObjectProperty("name", true, proxy(() => Identifier)),
    ...commonNodePropertiesSansParent,
]);
const StringLiteralLike = new UnionType([
    proxy(() => StringLiteral),
    proxy(() => NoSubstitutionTemplateLiteral)
]);
const PartiallyEmittedExpression = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_PartiallyEmittedExpression)),
    new ObjectProperty("expression", true, proxy(() => Expression)),
    ...commonNodeProperties,
]);
const UnaryExpression = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => numberType)),
    ...commonNodeProperties,
]);
const UpdateExpression = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => numberType)),
    ...commonNodeProperties,
]);
const PrefixUnaryExpression = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_PrefixUnaryExpression)),
    new ObjectProperty("operator", true, proxy(() => numberType)),
    new ObjectProperty("operand", true, proxy(() => UnaryExpression)),
    ...commonNodeProperties,
]);
const PostfixUnaryExpression = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_PostfixUnaryExpression)),
    new ObjectProperty("operand", true, proxy(() => LeftHandSideExpression)),
    new ObjectProperty("operator", true, proxy(() => numberType)),
    ...commonNodeProperties,
]);
const MemberExpression = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => numberType)),
    ...commonNodeProperties,
]);
const PrimaryExpression = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => numberType)),
    ...commonNodeProperties,
]);
const NullLiteral = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_NullKeyword)),
    ...commonNodeProperties,
]);
const BooleanLiteral = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => numberType)),
    ...commonNodeProperties,
]);
const ThisExpression = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ThisKeyword)),
    ...commonNodeProperties,
]);
const SuperExpression = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_SuperKeyword)),
    ...commonNodeProperties,
]);
const ImportExpression = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ImportKeyword)),
    ...commonNodeProperties,
]);
const DeleteExpression = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_DeleteExpression)),
    new ObjectProperty("expression", true, proxy(() => UnaryExpression)),
    ...commonNodeProperties,
]);
const TypeOfExpression = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_TypeOfExpression)),
    new ObjectProperty("expression", true, proxy(() => UnaryExpression)),
    ...commonNodeProperties,
]);
const VoidExpression = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_VoidExpression)),
    new ObjectProperty("expression", true, proxy(() => UnaryExpression)),
    ...commonNodeProperties,
]);
const AwaitExpression = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_AwaitExpression)),
    new ObjectProperty("expression", true, proxy(() => UnaryExpression)),
    ...commonNodeProperties,
]);
const YieldExpression = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_YieldExpression)),
    new ObjectProperty("asteriskToken", false, proxy(() => AsteriskToken)),
    new ObjectProperty("expression", false, proxy(() => Expression)),
    ...commonNodeProperties,
]);
const SyntheticExpression = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_SyntheticExpression)),
    new ObjectProperty("isSpread", true, proxy(() => booleanType)),
    new ObjectProperty("type", true, proxy(() => __type)),
    ...commonNodeProperties,
]);
const __type = new ObjectType([
]);
const OperatorToken = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => numberType)),
    ...commonNodeProperties,
]);
const BinaryExpression = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_BinaryExpression)),
    new ObjectProperty("left", true, proxy(() => Expression)),
    new ObjectProperty("operatorToken", true, proxy(() => OperatorToken)),
    new ObjectProperty("right", true, proxy(() => Expression)),
    ...commonNodeProperties,
]);
const AssignmentOperatorToken = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => numberType)),
    ...commonNodeProperties,
]);
const ObjectDestructuringAssignment = new ObjectType([
    new ObjectProperty("left", true, proxy(() => ObjectLiteralExpression)),
    new ObjectProperty("operatorToken", true, proxy(() => EqualsToken)),
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_BinaryExpression)),
    new ObjectProperty("right", true, proxy(() => Expression)),
    ...commonNodeProperties,
]);
const EqualsToken = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_EqualsToken)),
    ...commonNodeProperties,
]);
const ArrayDestructuringAssignment = new ObjectType([
    new ObjectProperty("left", true, proxy(() => ArrayLiteralExpression)),
    new ObjectProperty("operatorToken", true, proxy(() => EqualsToken)),
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_BinaryExpression)),
    new ObjectProperty("right", true, proxy(() => Expression)),
    ...commonNodeProperties,
]);
const ArrayLiteralExpression = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ArrayLiteralExpression)),
    new ObjectProperty("elements", true, proxy(() => NodeArray)),
    new ObjectProperty("multiLine", false, proxy(() => booleanType)),
    ...commonNodeProperties,
]);
const DestructuringAssignment = new UnionType([
    proxy(() => ObjectDestructuringAssignment),
    proxy(() => ArrayDestructuringAssignment)
]);
const PropertyAccessExpression = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_PropertyAccessExpression)),
    new ObjectProperty("expression", true, proxy(() => LeftHandSideExpression)),
    new ObjectProperty("questionDotToken", false, proxy(() => QuestionDotToken)),
    new ObjectProperty("name", true, proxy(() => IdentifierOrPrivateIdentifier)),
    ...commonNodeProperties,
]);
const IdentifierOrPrivateIdentifier = new UnionType([
    proxy(() => Identifier),
    proxy(() => PrivateIdentifier)
]);
const SpreadElement = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_SpreadElement)),
    new ObjectProperty("parent", true, proxy(() => type402)),
    new ObjectProperty("expression", true, proxy(() => Expression)),
    ...commonNodePropertiesSansParent,
]);
const CallExpression = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_CallExpression)),
    new ObjectProperty("expression", true, proxy(() => LeftHandSideExpression)),
    new ObjectProperty("questionDotToken", false, proxy(() => QuestionDotToken)),
    new ObjectProperty("typeArguments", false, proxy(() => NodeArray)),
    new ObjectProperty("arguments", true, proxy(() => NodeArray)),
    ...commonNodeProperties,
]);
const NewExpression = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_NewExpression)),
    new ObjectProperty("expression", true, proxy(() => LeftHandSideExpression)),
    new ObjectProperty("typeArguments", false, proxy(() => NodeArray)),
    new ObjectProperty("arguments", false, proxy(() => NodeArray)),
    ...commonNodeProperties,
]);
const type402 = new UnionType([
    proxy(() => CallExpression),
    proxy(() => NewExpression),
    proxy(() => ArrayLiteralExpression)
]);
const AssignmentExpression_EqualsToken_ = new ObjectType([
    new ObjectProperty("left", true, proxy(() => LeftHandSideExpression)),
    new ObjectProperty("operatorToken", true, proxy(() => EqualsToken)),
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_BinaryExpression)),
    new ObjectProperty("right", true, proxy(() => Expression)),
    ...commonNodeProperties,
]);
const BindingOrAssignmentElement = new UnionType([
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
const BindingOrAssignmentElementRestIndicator = new UnionType([
    proxy(() => SpreadAssignment),
    proxy(() => DotDotDotToken),
    proxy(() => SpreadElement)
]);
const BindingOrAssignmentElementTarget = new UnionType([
    proxy(() => Identifier),
    proxy(() => ElementAccessExpression),
    proxy(() => ObjectBindingPattern),
    proxy(() => ArrayBindingPattern),
    proxy(() => PropertyAccessExpression),
    proxy(() => OmittedExpression),
    proxy(() => ArrayLiteralExpression),
    proxy(() => ObjectLiteralExpression)
]);
const ObjectBindingOrAssignmentPattern = new UnionType([
    proxy(() => ObjectBindingPattern),
    proxy(() => ObjectLiteralExpression)
]);
const ArrayBindingOrAssignmentPattern = new UnionType([
    proxy(() => ArrayBindingPattern),
    proxy(() => ArrayLiteralExpression)
]);
const AssignmentPattern = new UnionType([
    proxy(() => ArrayLiteralExpression),
    proxy(() => ObjectLiteralExpression)
]);
const BindingOrAssignmentPattern = new UnionType([
    proxy(() => ObjectBindingPattern),
    proxy(() => ArrayBindingPattern),
    proxy(() => ArrayLiteralExpression),
    proxy(() => ObjectLiteralExpression)
]);
const ConditionalExpression = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ConditionalExpression)),
    new ObjectProperty("condition", true, proxy(() => Expression)),
    new ObjectProperty("questionToken", true, proxy(() => QuestionToken)),
    new ObjectProperty("whenTrue", true, proxy(() => Expression)),
    new ObjectProperty("colonToken", true, proxy(() => ColonToken)),
    new ObjectProperty("whenFalse", true, proxy(() => Expression)),
    ...commonNodeProperties,
]);
const ColonToken = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ColonToken)),
    ...commonNodeProperties,
]);
const LiteralLikeNode = new ObjectType([
    new ObjectProperty("text", true, proxy(() => stringType)),
    new ObjectProperty("isUnterminated", false, proxy(() => booleanType)),
    new ObjectProperty("hasExtendedUnicodeEscape", false, proxy(() => booleanType)),
    new ObjectProperty("kind", true, proxy(() => numberType)),
    ...commonNodeProperties,
]);
const TemplateLiteralLikeNode = new ObjectType([
    new ObjectProperty("rawText", false, proxy(() => stringType)),
    new ObjectProperty("text", true, proxy(() => stringType)),
    new ObjectProperty("isUnterminated", false, proxy(() => booleanType)),
    new ObjectProperty("hasExtendedUnicodeEscape", false, proxy(() => booleanType)),
    new ObjectProperty("kind", true, proxy(() => numberType)),
    ...commonNodeProperties,
]);
const LiteralExpression = new ObjectType([
    new ObjectProperty("text", true, proxy(() => stringType)),
    new ObjectProperty("isUnterminated", false, proxy(() => booleanType)),
    new ObjectProperty("hasExtendedUnicodeEscape", false, proxy(() => booleanType)),
    new ObjectProperty("kind", true, proxy(() => numberType)),
    ...commonNodeProperties,
]);
const RegularExpressionLiteral = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_RegularExpressionLiteral)),
    new ObjectProperty("text", true, proxy(() => stringType)),
    new ObjectProperty("isUnterminated", false, proxy(() => booleanType)),
    new ObjectProperty("hasExtendedUnicodeEscape", false, proxy(() => booleanType)),
    ...commonNodeProperties,
]);
const BigIntLiteral = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_BigIntLiteral)),
    new ObjectProperty("text", true, proxy(() => stringType)),
    new ObjectProperty("isUnterminated", false, proxy(() => booleanType)),
    new ObjectProperty("hasExtendedUnicodeEscape", false, proxy(() => booleanType)),
    ...commonNodeProperties,
]);
const TemplateHead = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_TemplateHead)),
    new ObjectProperty("parent", true, proxy(() => TemplateExpression)),
    new ObjectProperty("templateFlags", false, proxy(() => numberType)),
    new ObjectProperty("rawText", false, proxy(() => stringType)),
    new ObjectProperty("text", true, proxy(() => stringType)),
    new ObjectProperty("isUnterminated", false, proxy(() => booleanType)),
    new ObjectProperty("hasExtendedUnicodeEscape", false, proxy(() => booleanType)),
    ...commonNodePropertiesSansParent,
]);
const TemplateExpression = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_TemplateExpression)),
    new ObjectProperty("head", true, proxy(() => TemplateHead)),
    new ObjectProperty("templateSpans", true, proxy(() => NodeArray)),
    ...commonNodeProperties,
]);
const TemplateSpan = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_TemplateSpan)),
    new ObjectProperty("parent", true, proxy(() => TemplateExpression)),
    new ObjectProperty("expression", true, proxy(() => Expression)),
    new ObjectProperty("literal", true, proxy(() => type432)),
    ...commonNodePropertiesSansParent,
]);
const TemplateMiddle = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_TemplateMiddle)),
    new ObjectProperty("parent", true, proxy(() => TemplateSpan)),
    new ObjectProperty("templateFlags", false, proxy(() => numberType)),
    new ObjectProperty("rawText", false, proxy(() => stringType)),
    new ObjectProperty("text", true, proxy(() => stringType)),
    new ObjectProperty("isUnterminated", false, proxy(() => booleanType)),
    new ObjectProperty("hasExtendedUnicodeEscape", false, proxy(() => booleanType)),
    ...commonNodePropertiesSansParent,
]);
const TemplateTail = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_TemplateTail)),
    new ObjectProperty("parent", true, proxy(() => TemplateSpan)),
    new ObjectProperty("templateFlags", false, proxy(() => numberType)),
    new ObjectProperty("rawText", false, proxy(() => stringType)),
    new ObjectProperty("text", true, proxy(() => stringType)),
    new ObjectProperty("isUnterminated", false, proxy(() => booleanType)),
    new ObjectProperty("hasExtendedUnicodeEscape", false, proxy(() => booleanType)),
    ...commonNodePropertiesSansParent,
]);
const type432 = new UnionType([
    proxy(() => TemplateMiddle),
    proxy(() => TemplateTail)
]);
const TemplateLiteral = new UnionType([
    proxy(() => NoSubstitutionTemplateLiteral),
    proxy(() => TemplateExpression)
]);
const EntityNameOrEntityNameExpression = new UnionType([
    proxy(() => Identifier),
    proxy(() => QualifiedName),
    proxy(() => PropertyAccessEntityNameExpression)
]);
const AccessExpression = new UnionType([
    proxy(() => ElementAccessExpression),
    proxy(() => PropertyAccessExpression)
]);
const PrivateIdentifierPropertyAccessExpression = new ObjectType([
    new ObjectProperty("name", true, proxy(() => PrivateIdentifier)),
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_PropertyAccessExpression)),
    new ObjectProperty("expression", true, proxy(() => LeftHandSideExpression)),
    new ObjectProperty("questionDotToken", false, proxy(() => QuestionDotToken)),
    ...commonNodeProperties,
]);
const PropertyAccessChain = new ObjectType([
    new ObjectProperty("name", true, proxy(() => Identifier)),
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_PropertyAccessExpression)),
    new ObjectProperty("expression", true, proxy(() => LeftHandSideExpression)),
    new ObjectProperty("questionDotToken", false, proxy(() => QuestionDotToken)),
    ...commonNodeProperties,
]);
const PropertyAccessChainRoot = new ObjectType([
    new ObjectProperty("questionDotToken", true, proxy(() => QuestionDotToken)),
    new ObjectProperty("name", true, proxy(() => Identifier)),
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_PropertyAccessExpression)),
    new ObjectProperty("expression", true, proxy(() => LeftHandSideExpression)),
    ...commonNodeProperties,
]);
const SuperPropertyAccessExpression = new ObjectType([
    new ObjectProperty("expression", true, proxy(() => SuperExpression)),
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_PropertyAccessExpression)),
    new ObjectProperty("questionDotToken", false, proxy(() => QuestionDotToken)),
    new ObjectProperty("name", true, proxy(() => IdentifierOrPrivateIdentifier)),
    ...commonNodeProperties,
]);
const ElementAccessChain = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ElementAccessExpression)),
    new ObjectProperty("expression", true, proxy(() => LeftHandSideExpression)),
    new ObjectProperty("questionDotToken", false, proxy(() => QuestionDotToken)),
    new ObjectProperty("argumentExpression", true, proxy(() => Expression)),
    ...commonNodeProperties,
]);
const ElementAccessChainRoot = new ObjectType([
    new ObjectProperty("questionDotToken", true, proxy(() => QuestionDotToken)),
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ElementAccessExpression)),
    new ObjectProperty("expression", true, proxy(() => LeftHandSideExpression)),
    new ObjectProperty("argumentExpression", true, proxy(() => Expression)),
    ...commonNodeProperties,
]);
const SuperElementAccessExpression = new ObjectType([
    new ObjectProperty("expression", true, proxy(() => SuperExpression)),
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ElementAccessExpression)),
    new ObjectProperty("questionDotToken", false, proxy(() => QuestionDotToken)),
    new ObjectProperty("argumentExpression", true, proxy(() => Expression)),
    ...commonNodeProperties,
]);
const SuperProperty = new UnionType([
    proxy(() => SuperPropertyAccessExpression),
    proxy(() => SuperElementAccessExpression)
]);
const CallChain = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_CallExpression)),
    new ObjectProperty("expression", true, proxy(() => LeftHandSideExpression)),
    new ObjectProperty("questionDotToken", false, proxy(() => QuestionDotToken)),
    new ObjectProperty("typeArguments", false, proxy(() => NodeArray)),
    new ObjectProperty("arguments", true, proxy(() => NodeArray)),
    ...commonNodeProperties,
]);
const CallChainRoot = new ObjectType([
    new ObjectProperty("questionDotToken", true, proxy(() => QuestionDotToken)),
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_CallExpression)),
    new ObjectProperty("expression", true, proxy(() => LeftHandSideExpression)),
    new ObjectProperty("typeArguments", false, proxy(() => NodeArray)),
    new ObjectProperty("arguments", true, proxy(() => NodeArray)),
    ...commonNodeProperties,
]);
const OptionalChain = new UnionType([
    proxy(() => PropertyAccessChain),
    proxy(() => ElementAccessChain),
    proxy(() => CallChain)
]);
const OptionalChainRoot = new UnionType([
    proxy(() => PropertyAccessChainRoot),
    proxy(() => ElementAccessChainRoot),
    proxy(() => CallChainRoot)
]);
const WellKnownSymbolExpression = new ObjectType([
    new ObjectProperty("expression", true, proxy(() => identifierWithEscapedTextIsLiteralTypeSymbol)),
    new ObjectProperty("name", true, proxy(() => Identifier)),
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_PropertyAccessExpression)),
    new ObjectProperty("questionDotToken", false, proxy(() => QuestionDotToken)),
    ...commonNodeProperties,
]);
const escapedTextIsLiteralTypeSymbol = new ObjectType([
    new ObjectProperty("escapedText", true, proxy(() => literalTypeSymbol)),
]);
const literalTypeSymbol = new LiteralType("Symbol");
const identifierWithEscapedTextIsLiteralTypeSymbol = new IntersectionType([proxy(() => Identifier),
proxy(() => escapedTextIsLiteralTypeSymbol)]);
const type453 = new ObjectType([
    new ObjectProperty("arguments", true, proxy(() => type454)),
]);
const type454 = new ObjectType([
    new ObjectProperty("0", true, proxy(() => BindableStaticNameExpression)),
    new ObjectProperty("1", true, proxy(() => type460)),
    new ObjectProperty("2", true, proxy(() => ObjectLiteralExpression)),
]);
const type455 = new ObjectType([
    new ObjectProperty("argumentExpression", true, proxy(() => type456)),
]);
const type456 = new UnionType([
    proxy(() => StringLiteral),
    proxy(() => NumericLiteral),
    proxy(() => NoSubstitutionTemplateLiteral),
    proxy(() => WellKnownSymbolExpression)
]);
const type457 = new ObjectType([
    new ObjectProperty("expression", true, proxy(() => BindableStaticNameExpression)),
]);
const intersection458 = new IntersectionType([proxy(() => ElementAccessExpression),
proxy(() => Declaration),
proxy(() => type455),
proxy(() => type457)]);
const BindableStaticNameExpression = new UnionType([
    proxy(() => Identifier),
    proxy(() => PropertyAccessEntityNameExpression),
    proxy(() => intersection458)
]);
const type460 = new UnionType([
    proxy(() => StringLiteral),
    proxy(() => NumericLiteral),
    proxy(() => NoSubstitutionTemplateLiteral)
]);
const BindableObjectDefinePropertyCall = new IntersectionType([proxy(() => CallExpression),
proxy(() => type453)]);
const type462 = new ObjectType([
    new ObjectProperty("argumentExpression", true, proxy(() => type463)),
]);
const type463 = new UnionType([
    proxy(() => StringLiteral),
    proxy(() => NumericLiteral),
    proxy(() => NoSubstitutionTemplateLiteral),
    proxy(() => WellKnownSymbolExpression)
]);
const LiteralLikeElementAccessExpression = new IntersectionType([proxy(() => ElementAccessExpression),
proxy(() => Declaration),
proxy(() => type462)]);
const type465 = new ObjectType([
    new ObjectProperty("argumentExpression", true, proxy(() => type466)),
]);
const type466 = new UnionType([
    proxy(() => StringLiteral),
    proxy(() => NumericLiteral),
    proxy(() => NoSubstitutionTemplateLiteral),
    proxy(() => WellKnownSymbolExpression)
]);
const type467 = new ObjectType([
    new ObjectProperty("expression", true, proxy(() => BindableStaticNameExpression)),
]);
const BindableStaticElementAccessExpression = new IntersectionType([proxy(() => ElementAccessExpression),
proxy(() => Declaration),
proxy(() => type465),
proxy(() => type467)]);
const type469 = new ObjectType([
    new ObjectProperty("expression", true, proxy(() => BindableStaticNameExpression)),
]);
const BindableElementAccessExpression = new IntersectionType([proxy(() => ElementAccessExpression),
proxy(() => type469)]);
const type471 = new ObjectType([
    new ObjectProperty("argumentExpression", true, proxy(() => type472)),
]);
const type472 = new UnionType([
    proxy(() => StringLiteral),
    proxy(() => NumericLiteral),
    proxy(() => NoSubstitutionTemplateLiteral),
    proxy(() => WellKnownSymbolExpression)
]);
const type473 = new ObjectType([
    new ObjectProperty("expression", true, proxy(() => BindableStaticNameExpression)),
]);
const intersection474 = new IntersectionType([proxy(() => ElementAccessExpression),
proxy(() => Declaration),
proxy(() => type471),
proxy(() => type473)]);
const BindableStaticAccessExpression = new UnionType([
    proxy(() => PropertyAccessEntityNameExpression),
    proxy(() => intersection474)
]);
const type476 = new ObjectType([
    new ObjectProperty("expression", true, proxy(() => BindableStaticNameExpression)),
]);
const intersection477 = new IntersectionType([proxy(() => ElementAccessExpression),
proxy(() => type476)]);
const BindableAccessExpression = new UnionType([
    proxy(() => PropertyAccessEntityNameExpression),
    proxy(() => intersection477)
]);
const BindableStaticPropertyAssignmentExpression = new ObjectType([
    new ObjectProperty("left", true, proxy(() => BindableStaticAccessExpression)),
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_BinaryExpression)),
    new ObjectProperty("operatorToken", true, proxy(() => OperatorToken)),
    new ObjectProperty("right", true, proxy(() => Expression)),
    ...commonNodeProperties,
]);
const BindablePropertyAssignmentExpression = new ObjectType([
    new ObjectProperty("left", true, proxy(() => BindableAccessExpression)),
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_BinaryExpression)),
    new ObjectProperty("operatorToken", true, proxy(() => OperatorToken)),
    new ObjectProperty("right", true, proxy(() => Expression)),
    ...commonNodeProperties,
]);
const SuperCall = new ObjectType([
    new ObjectProperty("expression", true, proxy(() => SuperExpression)),
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_CallExpression)),
    new ObjectProperty("questionDotToken", false, proxy(() => QuestionDotToken)),
    new ObjectProperty("typeArguments", false, proxy(() => NodeArray)),
    new ObjectProperty("arguments", true, proxy(() => NodeArray)),
    ...commonNodeProperties,
]);
const ImportCall = new ObjectType([
    new ObjectProperty("expression", true, proxy(() => ImportExpression)),
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_CallExpression)),
    new ObjectProperty("questionDotToken", false, proxy(() => QuestionDotToken)),
    new ObjectProperty("typeArguments", false, proxy(() => NodeArray)),
    new ObjectProperty("arguments", true, proxy(() => NodeArray)),
    ...commonNodeProperties,
]);
const TaggedTemplateExpression = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_TaggedTemplateExpression)),
    new ObjectProperty("tag", true, proxy(() => LeftHandSideExpression)),
    new ObjectProperty("typeArguments", false, proxy(() => NodeArray)),
    new ObjectProperty("template", true, proxy(() => TemplateLiteral)),
    new ObjectProperty("questionDotToken", false, proxy(() => QuestionDotToken)),
    ...commonNodeProperties,
]);
const JsxOpeningElement = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JsxOpeningElement)),
    new ObjectProperty("parent", true, proxy(() => JsxElement)),
    new ObjectProperty("tagName", true, proxy(() => JsxTagNameExpression)),
    new ObjectProperty("typeArguments", false, proxy(() => NodeArray)),
    new ObjectProperty("attributes", true, proxy(() => JsxAttributes)),
    ...commonNodePropertiesSansParent,
]);
const JsxElement = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JsxElement)),
    new ObjectProperty("openingElement", true, proxy(() => JsxOpeningElement)),
    new ObjectProperty("children", true, proxy(() => NodeArray)),
    new ObjectProperty("closingElement", true, proxy(() => JsxClosingElement)),
    ...commonNodeProperties,
]);
const JsxClosingElement = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JsxClosingElement)),
    new ObjectProperty("parent", true, proxy(() => JsxElement)),
    new ObjectProperty("tagName", true, proxy(() => JsxTagNameExpression)),
    ...commonNodePropertiesSansParent,
]);
const JsxTagNamePropertyAccess = new ObjectType([
    new ObjectProperty("expression", true, proxy(() => JsxTagNameExpression)),
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_PropertyAccessExpression)),
    new ObjectProperty("questionDotToken", false, proxy(() => QuestionDotToken)),
    new ObjectProperty("name", true, proxy(() => IdentifierOrPrivateIdentifier)),
    ...commonNodeProperties,
]);
const JsxTagNameExpression = new UnionType([
    proxy(() => Identifier),
    proxy(() => ThisExpression),
    proxy(() => JsxTagNamePropertyAccess)
]);
const JsxAttributes = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JsxAttributes)),
    new ObjectProperty("parent", true, proxy(() => JsxOpeningLikeElement)),
    new ObjectProperty("properties", true, proxy(() => NodeArray)),
    ...commonNodePropertiesSansParent,
]);
const JsxSelfClosingElement = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JsxSelfClosingElement)),
    new ObjectProperty("tagName", true, proxy(() => JsxTagNameExpression)),
    new ObjectProperty("typeArguments", false, proxy(() => NodeArray)),
    new ObjectProperty("attributes", true, proxy(() => JsxAttributes)),
    ...commonNodeProperties,
]);
const JsxOpeningLikeElement = new UnionType([
    proxy(() => JsxOpeningElement),
    proxy(() => JsxSelfClosingElement)
]);
const CallLikeExpression = new UnionType([
    proxy(() => CallExpression),
    proxy(() => NewExpression),
    proxy(() => TaggedTemplateExpression),
    proxy(() => JsxOpeningElement),
    proxy(() => JsxSelfClosingElement),
    proxy(() => Decorator)
]);
const JsxAttribute = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JsxAttribute)),
    new ObjectProperty("parent", true, proxy(() => JsxAttributes)),
    new ObjectProperty("name", true, proxy(() => Identifier)),
    new ObjectProperty("initializer", false, proxy(() => type508)),
    ...commonNodePropertiesSansParent,
]);
const JsxExpression = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JsxExpression)),
    new ObjectProperty("parent", true, proxy(() => type506)),
    new ObjectProperty("dotDotDotToken", false, proxy(() => Token_SyntaxKind_DotDotDotToken_)),
    new ObjectProperty("expression", false, proxy(() => Expression)),
    ...commonNodePropertiesSansParent,
]);
const JsxSpreadAttribute = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JsxSpreadAttribute)),
    new ObjectProperty("parent", true, proxy(() => JsxAttributes)),
    new ObjectProperty("expression", true, proxy(() => Expression)),
    new ObjectProperty("name", false, proxy(() => PropertyName)),
    ...commonNodePropertiesSansParent,
]);
const type506 = new UnionType([
    proxy(() => JsxAttribute),
    proxy(() => JsxElement),
    proxy(() => JsxSpreadAttribute)
]);
const Token_SyntaxKind_DotDotDotToken_ = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_DotDotDotToken)),
    ...commonNodeProperties,
]);
const type508 = new UnionType([
    proxy(() => StringLiteral),
    proxy(() => JsxExpression)
]);
const JsxFragment = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JsxFragment)),
    new ObjectProperty("openingFragment", true, proxy(() => JsxOpeningFragment)),
    new ObjectProperty("children", true, proxy(() => NodeArray)),
    new ObjectProperty("closingFragment", true, proxy(() => JsxClosingFragment)),
    ...commonNodeProperties,
]);
const JsxOpeningFragment = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JsxOpeningFragment)),
    new ObjectProperty("parent", true, proxy(() => JsxFragment)),
    ...commonNodePropertiesSansParent,
]);
const JsxClosingFragment = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JsxClosingFragment)),
    new ObjectProperty("parent", true, proxy(() => JsxFragment)),
    ...commonNodePropertiesSansParent,
]);
const JsxText = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JsxText)),
    new ObjectProperty("containsOnlyTriviaWhiteSpaces", true, proxy(() => booleanType)),
    new ObjectProperty("parent", true, proxy(() => JsxElement)),
    new ObjectProperty("text", true, proxy(() => stringType)),
    new ObjectProperty("isUnterminated", false, proxy(() => booleanType)),
    new ObjectProperty("hasExtendedUnicodeEscape", false, proxy(() => booleanType)),
    ...commonNodePropertiesSansParent,
]);
const AsExpression = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_AsExpression)),
    new ObjectProperty("expression", true, proxy(() => Expression)),
    new ObjectProperty("type", true, proxy(() => TypeNode)),
    ...commonNodeProperties,
]);
const TypeAssertion = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_TypeAssertionExpression)),
    new ObjectProperty("type", true, proxy(() => TypeNode)),
    new ObjectProperty("expression", true, proxy(() => UnaryExpression)),
    ...commonNodeProperties,
]);
const AssertionExpression = new UnionType([
    proxy(() => TypeAssertion),
    proxy(() => AsExpression)
]);
const NonNullExpression = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_NonNullExpression)),
    new ObjectProperty("expression", true, proxy(() => Expression)),
    ...commonNodeProperties,
]);
const MetaProperty = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_MetaProperty)),
    new ObjectProperty("keywordToken", true, proxy(() => numberType)),
    new ObjectProperty("name", true, proxy(() => Identifier)),
    ...commonNodeProperties,
]);
const ImportMetaProperty = new ObjectType([
    new ObjectProperty("keywordToken", true, proxy(() => SyntaxKind_ImportKeyword)),
    new ObjectProperty("name", true, proxy(() => identifierWithEscapedTextIsLiteralTypemeta)),
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_MetaProperty)),
    ...commonNodeProperties,
]);
const escapedTextIsLiteralTypemeta = new ObjectType([
    new ObjectProperty("escapedText", true, proxy(() => literalTypemeta)),
]);
const literalTypemeta = new LiteralType("meta");
const identifierWithEscapedTextIsLiteralTypemeta = new IntersectionType([proxy(() => Identifier),
proxy(() => escapedTextIsLiteralTypemeta)]);
const JsxAttributeLike = new UnionType([
    proxy(() => JsxAttribute),
    proxy(() => JsxSpreadAttribute)
]);
const JsxChild = new UnionType([
    proxy(() => JsxSelfClosingElement),
    proxy(() => JsxElement),
    proxy(() => JsxFragment),
    proxy(() => JsxExpression),
    proxy(() => JsxText)
]);
const NotEmittedStatement = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_NotEmittedStatement)),
    ...commonNodeProperties,
]);
const EndOfDeclarationMarker = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_EndOfDeclarationMarker)),
    ...commonNodeProperties,
]);
const CommaListExpression = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_CommaListExpression)),
    new ObjectProperty("elements", true, proxy(() => NodeArray)),
    ...commonNodeProperties,
]);
const MergeDeclarationMarker = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_MergeDeclarationMarker)),
    ...commonNodeProperties,
]);
const SyntheticReferenceExpression = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_SyntheticReferenceExpression)),
    new ObjectProperty("expression", true, proxy(() => Expression)),
    new ObjectProperty("thisArg", true, proxy(() => Expression)),
    ...commonNodeProperties,
]);
const EmptyStatement = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_EmptyStatement)),
    ...commonNodeProperties,
]);
const DebuggerStatement = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_DebuggerStatement)),
    ...commonNodeProperties,
]);
const MissingDeclaration = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_MissingDeclaration)),
    new ObjectProperty("name", false, proxy(() => Identifier)),
    ...commonNodeProperties,
]);
const CaseClause = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_CaseClause)),
    new ObjectProperty("parent", true, proxy(() => CaseBlock)),
    new ObjectProperty("expression", true, proxy(() => Expression)),
    new ObjectProperty("statements", true, proxy(() => NodeArray)),
    new ObjectProperty("fallthroughFlowNode", false, proxy(() => FlowNode)),
    ...commonNodePropertiesSansParent,
]);
const CaseBlock = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_CaseBlock)),
    new ObjectProperty("parent", true, proxy(() => SwitchStatement)),
    new ObjectProperty("clauses", true, proxy(() => NodeArray)),
    ...commonNodePropertiesSansParent,
]);
const SwitchStatement = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_SwitchStatement)),
    new ObjectProperty("expression", true, proxy(() => Expression)),
    new ObjectProperty("caseBlock", true, proxy(() => CaseBlock)),
    new ObjectProperty("possiblyExhaustive", false, proxy(() => booleanType)),
    ...commonNodeProperties,
]);
const DefaultClause = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_DefaultClause)),
    new ObjectProperty("parent", true, proxy(() => CaseBlock)),
    new ObjectProperty("statements", true, proxy(() => NodeArray)),
    new ObjectProperty("fallthroughFlowNode", false, proxy(() => FlowNode)),
    ...commonNodePropertiesSansParent,
]);
const BlockLike = new UnionType([
    proxy(() => Block),
    proxy(() => SourceFile),
    proxy(() => ModuleBlock),
    proxy(() => CaseClause),
    proxy(() => DefaultClause)
]);
const PrologueDirective = new ObjectType([
    new ObjectProperty("expression", true, proxy(() => StringLiteral)),
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ExpressionStatement)),
    ...commonNodeProperties,
    new ObjectProperty("jsDoc", false, proxy(() => type558)),
    new ObjectProperty("jsDocCache", false, proxy(() => type559)),
]);
const type558 = new ArrayType(proxy(() => JSDoc), []);
const type559 = new ArrayType(proxy(() => JSDocTag), []);
const IfStatement = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_IfStatement)),
    new ObjectProperty("expression", true, proxy(() => Expression)),
    new ObjectProperty("thenStatement", true, proxy(() => Statement)),
    new ObjectProperty("elseStatement", false, proxy(() => Statement)),
    ...commonNodeProperties,
]);
const IterationStatement = new ObjectType([
    new ObjectProperty("statement", true, proxy(() => Statement)),
    new ObjectProperty("kind", true, proxy(() => numberType)),
    ...commonNodeProperties,
]);
const DoStatement = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_DoStatement)),
    new ObjectProperty("expression", true, proxy(() => Expression)),
    new ObjectProperty("statement", true, proxy(() => Statement)),
    ...commonNodeProperties,
]);
const WhileStatement = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_WhileStatement)),
    new ObjectProperty("expression", true, proxy(() => Expression)),
    new ObjectProperty("statement", true, proxy(() => Statement)),
    ...commonNodeProperties,
]);
const ForInOrOfStatement = new UnionType([
    proxy(() => ForInStatement),
    proxy(() => ForOfStatement)
]);
const BreakStatement = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_BreakStatement)),
    new ObjectProperty("label", false, proxy(() => Identifier)),
    ...commonNodeProperties,
]);
const ContinueStatement = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ContinueStatement)),
    new ObjectProperty("label", false, proxy(() => Identifier)),
    ...commonNodeProperties,
]);
const BreakOrContinueStatement = new UnionType([
    proxy(() => BreakStatement),
    proxy(() => ContinueStatement)
]);
const ReturnStatement = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ReturnStatement)),
    new ObjectProperty("expression", false, proxy(() => Expression)),
    ...commonNodeProperties,
]);
const WithStatement = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_WithStatement)),
    new ObjectProperty("expression", true, proxy(() => Expression)),
    new ObjectProperty("statement", true, proxy(() => Statement)),
    ...commonNodeProperties,
]);
const CaseOrDefaultClause = new UnionType([
    proxy(() => CaseClause),
    proxy(() => DefaultClause)
]);
const ThrowStatement = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ThrowStatement)),
    new ObjectProperty("expression", false, proxy(() => Expression)),
    ...commonNodeProperties,
]);
const JSDocTypedefTag = new ObjectType([
    new ObjectProperty("parent", true, proxy(() => JSDoc)),
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocTypedefTag)),
    new ObjectProperty("fullName", false, proxy(() => type582)),
    new ObjectProperty("name", false, proxy(() => Identifier)),
    new ObjectProperty("typeExpression", false, proxy(() => type583)),
    new ObjectProperty("tagName", true, proxy(() => Identifier)),
    new ObjectProperty("comment", false, proxy(() => stringType)),
    ...commonNodePropertiesSansParent,
]);
const type582 = new UnionType([
    proxy(() => Identifier),
    proxy(() => JSDocNamespaceDeclaration)
]);
const type583 = new UnionType([
    proxy(() => JSDocTypeExpression),
    proxy(() => JSDocTypeLiteral)
]);
const JSDocCallbackTag = new ObjectType([
    new ObjectProperty("parent", true, proxy(() => JSDoc)),
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocCallbackTag)),
    new ObjectProperty("fullName", false, proxy(() => type586)),
    new ObjectProperty("name", false, proxy(() => Identifier)),
    new ObjectProperty("typeExpression", true, proxy(() => JSDocSignature)),
    new ObjectProperty("tagName", true, proxy(() => Identifier)),
    new ObjectProperty("comment", false, proxy(() => stringType)),
    ...commonNodePropertiesSansParent,
]);
const type586 = new UnionType([
    proxy(() => Identifier),
    proxy(() => JSDocNamespaceDeclaration)
]);
const JSDocSignature = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocSignature)),
    new ObjectProperty("typeParameters", false, proxy(() => type589)),
    new ObjectProperty("parameters", true, proxy(() => type590)),
    new ObjectProperty("type", false, proxy(() => JSDocReturnTag)),
    ...commonNodeProperties,
]);
const type589 = new ArrayType(proxy(() => JSDocTemplateTag), []);
const type590 = new ArrayType(proxy(() => JSDocParameterTag), []);
const JSDocParameterTag = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocParameterTag)),
    new ObjectProperty("parent", true, proxy(() => JSDoc)),
    new ObjectProperty("name", true, proxy(() => EntityName)),
    new ObjectProperty("typeExpression", false, proxy(() => JSDocTypeExpression)),
    new ObjectProperty("isNameFirst", true, proxy(() => booleanType)),
    new ObjectProperty("isBracketed", true, proxy(() => booleanType)),
    new ObjectProperty("tagName", true, proxy(() => Identifier)),
    new ObjectProperty("comment", false, proxy(() => stringType)),
    ...commonNodePropertiesSansParent,
]);
const JSDocReturnTag = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocReturnTag)),
    new ObjectProperty("typeExpression", false, proxy(() => JSDocTypeExpression)),
    new ObjectProperty("parent", true, proxy(() => type595)),
    new ObjectProperty("tagName", true, proxy(() => Identifier)),
    new ObjectProperty("comment", false, proxy(() => stringType)),
    ...commonNodePropertiesSansParent,
]);
const type595 = new UnionType([
    proxy(() => JSDoc),
    proxy(() => JSDocTypeLiteral)
]);
const DeclarationWithTypeParameters = new UnionType([
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
const DeclarationWithTypeParameterChildren = new UnionType([
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
const ClassLikeDeclarationBase = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => numberType)),
    new ObjectProperty("name", false, proxy(() => Identifier)),
    new ObjectProperty("typeParameters", false, proxy(() => NodeArray)),
    new ObjectProperty("heritageClauses", false, proxy(() => NodeArray)),
    new ObjectProperty("members", true, proxy(() => NodeArray)),
    ...commonNodeProperties,
    new ObjectProperty("jsDoc", false, proxy(() => Array_JSDoc)),
    new ObjectProperty("jsDocCache", false, proxy(() => Array_JSDocTag)),
]);
const ModuleBody = new UnionType([
    proxy(() => Identifier),
    proxy(() => ModuleBlock),
    proxy(() => NamespaceDeclaration),
    proxy(() => JSDocNamespaceDeclaration)
]);
const AmbientModuleDeclaration = new ObjectType([
    new ObjectProperty("body", false, proxy(() => ModuleBlock)),
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ModuleDeclaration)),
    new ObjectProperty("parent", true, proxy(() => type603)),
    new ObjectProperty("name", true, proxy(() => ModuleName)),
    ...commonNodePropertiesSansParent,
    new ObjectProperty("jsDoc", false, proxy(() => type604)),
    new ObjectProperty("jsDocCache", false, proxy(() => type605)),
]);
const type603 = new UnionType([
    proxy(() => Identifier),
    proxy(() => SourceFile),
    proxy(() => ModuleBlock),
    proxy(() => NamespaceDeclaration),
    proxy(() => JSDocNamespaceDeclaration)
]);
const type604 = new ArrayType(proxy(() => JSDoc), []);
const type605 = new ArrayType(proxy(() => JSDocTag), []);
const ImportDeclaration = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ImportDeclaration)),
    new ObjectProperty("parent", true, proxy(() => type608)),
    new ObjectProperty("importClause", false, proxy(() => ImportClause)),
    new ObjectProperty("moduleSpecifier", true, proxy(() => Expression)),
    ...commonNodePropertiesSansParent,
]);
const type608 = new UnionType([
    proxy(() => SourceFile),
    proxy(() => ModuleBlock)
]);
const ImportClause = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ImportClause)),
    new ObjectProperty("parent", true, proxy(() => ImportDeclaration)),
    new ObjectProperty("isTypeOnly", true, proxy(() => booleanType)),
    new ObjectProperty("name", false, proxy(() => Identifier)),
    new ObjectProperty("namedBindings", false, proxy(() => NamedImportBindings)),
    ...commonNodePropertiesSansParent,
]);
const NamespaceImport = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_NamespaceImport)),
    new ObjectProperty("parent", true, proxy(() => ImportClause)),
    new ObjectProperty("name", true, proxy(() => Identifier)),
    ...commonNodePropertiesSansParent,
]);
const NamedImports = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_NamedImports)),
    new ObjectProperty("parent", true, proxy(() => ImportClause)),
    new ObjectProperty("elements", true, proxy(() => NodeArray)),
    ...commonNodePropertiesSansParent,
]);
const NamedImportBindings = new UnionType([
    proxy(() => NamespaceImport),
    proxy(() => NamedImports)
]);
const ImportSpecifier = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ImportSpecifier)),
    new ObjectProperty("parent", true, proxy(() => NamedImports)),
    new ObjectProperty("propertyName", false, proxy(() => Identifier)),
    new ObjectProperty("name", true, proxy(() => Identifier)),
    ...commonNodePropertiesSansParent,
]);
const NamespaceExportDeclaration = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_NamespaceExportDeclaration)),
    new ObjectProperty("name", true, proxy(() => Identifier)),
    ...commonNodeProperties,
]);
const NamedImportsOrExports = new UnionType([
    proxy(() => NamedImports),
    proxy(() => NamedExports)
]);
const ImportOrExportSpecifier = new UnionType([
    proxy(() => ImportSpecifier),
    proxy(() => ExportSpecifier)
]);
const TypeOnlyCompatibleAliasDeclaration = new UnionType([
    proxy(() => NamespaceImport),
    proxy(() => ImportClause),
    proxy(() => ImportSpecifier),
    proxy(() => ExportSpecifier)
]);
const ExportAssignment = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_ExportAssignment)),
    new ObjectProperty("parent", true, proxy(() => SourceFile)),
    new ObjectProperty("isExportEquals", false, proxy(() => booleanType)),
    new ObjectProperty("expression", true, proxy(() => Expression)),
    new ObjectProperty("name", false, proxy(() => type625)),
    ...commonNodePropertiesSansParent,
]);
const type625 = new UnionType([
    proxy(() => Identifier),
    proxy(() => StringLiteral),
    proxy(() => NumericLiteral)
]);
const CommentRange = new ObjectType([
    new ObjectProperty("hasTrailingNewLine", false, proxy(() => booleanType)),
    new ObjectProperty("kind", true, proxy(() => numberType)),
    new ObjectProperty("pos", true, proxy(() => numberType)),
    new ObjectProperty("end", true, proxy(() => numberType)),
]);
const SynthesizedComment = new ObjectType([
    new ObjectProperty("text", true, proxy(() => stringType)),
    new ObjectProperty("pos", true, proxy(() => literalNegative1)),
    new ObjectProperty("end", true, proxy(() => literalNegative1)),
    new ObjectProperty("hasTrailingNewLine", false, proxy(() => booleanType)),
    new ObjectProperty("kind", true, proxy(() => numberType)),
]);
const literalNegative1 = new LiteralType(-1);
const JSDocType = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => numberType)),
    ...commonNodeProperties,
]);
const JSDocAllType = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocAllType)),
    ...commonNodeProperties,
]);
const JSDocUnknownType = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocUnknownType)),
    ...commonNodeProperties,
]);
const JSDocNonNullableType = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocNonNullableType)),
    new ObjectProperty("type", true, proxy(() => TypeNode)),
    ...commonNodeProperties,
]);
const JSDocNullableType = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocNullableType)),
    new ObjectProperty("type", true, proxy(() => TypeNode)),
    ...commonNodeProperties,
]);
const JSDocOptionalType = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocOptionalType)),
    new ObjectProperty("type", true, proxy(() => TypeNode)),
    ...commonNodeProperties,
]);
const JSDocVariadicType = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocVariadicType)),
    new ObjectProperty("type", true, proxy(() => TypeNode)),
    ...commonNodeProperties,
]);
const JSDocNamepathType = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocNamepathType)),
    new ObjectProperty("type", true, proxy(() => TypeNode)),
    ...commonNodeProperties,
]);
const JSDocTypeReferencingNode = new UnionType([
    proxy(() => JSDocNonNullableType),
    proxy(() => JSDocNullableType),
    proxy(() => JSDocOptionalType),
    proxy(() => JSDocVariadicType)
]);
const JSDocUnknownTag = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocTag)),
    new ObjectProperty("parent", true, proxy(() => type648)),
    new ObjectProperty("tagName", true, proxy(() => Identifier)),
    new ObjectProperty("comment", false, proxy(() => stringType)),
    ...commonNodePropertiesSansParent,
]);
const type648 = new UnionType([
    proxy(() => JSDoc),
    proxy(() => JSDocTypeLiteral)
]);
const JSDocAuthorTag = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocAuthorTag)),
    new ObjectProperty("parent", true, proxy(() => type651)),
    new ObjectProperty("tagName", true, proxy(() => Identifier)),
    new ObjectProperty("comment", false, proxy(() => stringType)),
    ...commonNodePropertiesSansParent,
]);
const type651 = new UnionType([
    proxy(() => JSDoc),
    proxy(() => JSDocTypeLiteral)
]);
const JSDocClassTag = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocClassTag)),
    new ObjectProperty("parent", true, proxy(() => type654)),
    new ObjectProperty("tagName", true, proxy(() => Identifier)),
    new ObjectProperty("comment", false, proxy(() => stringType)),
    ...commonNodePropertiesSansParent,
]);
const type654 = new UnionType([
    proxy(() => JSDoc),
    proxy(() => JSDocTypeLiteral)
]);
const JSDocPublicTag = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocPublicTag)),
    new ObjectProperty("parent", true, proxy(() => type657)),
    new ObjectProperty("tagName", true, proxy(() => Identifier)),
    new ObjectProperty("comment", false, proxy(() => stringType)),
    ...commonNodePropertiesSansParent,
]);
const type657 = new UnionType([
    proxy(() => JSDoc),
    proxy(() => JSDocTypeLiteral)
]);
const JSDocPrivateTag = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocPrivateTag)),
    new ObjectProperty("parent", true, proxy(() => type660)),
    new ObjectProperty("tagName", true, proxy(() => Identifier)),
    new ObjectProperty("comment", false, proxy(() => stringType)),
    ...commonNodePropertiesSansParent,
]);
const type660 = new UnionType([
    proxy(() => JSDoc),
    proxy(() => JSDocTypeLiteral)
]);
const JSDocProtectedTag = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocProtectedTag)),
    new ObjectProperty("parent", true, proxy(() => type663)),
    new ObjectProperty("tagName", true, proxy(() => Identifier)),
    new ObjectProperty("comment", false, proxy(() => stringType)),
    ...commonNodePropertiesSansParent,
]);
const type663 = new UnionType([
    proxy(() => JSDoc),
    proxy(() => JSDocTypeLiteral)
]);
const JSDocReadonlyTag = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocReadonlyTag)),
    new ObjectProperty("parent", true, proxy(() => type666)),
    new ObjectProperty("tagName", true, proxy(() => Identifier)),
    new ObjectProperty("comment", false, proxy(() => stringType)),
    ...commonNodePropertiesSansParent,
]);
const type666 = new UnionType([
    proxy(() => JSDoc),
    proxy(() => JSDocTypeLiteral)
]);
const JSDocEnumTag = new ObjectType([
    new ObjectProperty("parent", true, proxy(() => JSDoc)),
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocEnumTag)),
    new ObjectProperty("typeExpression", false, proxy(() => JSDocTypeExpression)),
    new ObjectProperty("tagName", true, proxy(() => Identifier)),
    new ObjectProperty("comment", false, proxy(() => stringType)),
    ...commonNodePropertiesSansParent,
]);
const JSDocThisTag = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocThisTag)),
    new ObjectProperty("typeExpression", false, proxy(() => JSDocTypeExpression)),
    new ObjectProperty("parent", true, proxy(() => type671)),
    new ObjectProperty("tagName", true, proxy(() => Identifier)),
    new ObjectProperty("comment", false, proxy(() => stringType)),
    ...commonNodePropertiesSansParent,
]);
const type671 = new UnionType([
    proxy(() => JSDoc),
    proxy(() => JSDocTypeLiteral)
]);
const JSDocTypeTag = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocTypeTag)),
    new ObjectProperty("typeExpression", true, proxy(() => JSDocTypeExpression)),
    new ObjectProperty("parent", true, proxy(() => type674)),
    new ObjectProperty("tagName", true, proxy(() => Identifier)),
    new ObjectProperty("comment", false, proxy(() => stringType)),
    ...commonNodePropertiesSansParent,
]);
const type674 = new UnionType([

    proxy(() => JSDoc),
    proxy(() => JSDocTypeLiteral)

]);
const JSDocPropertyTag = new ObjectType([
    new ObjectProperty("kind", true, proxy(() => SyntaxKind_JSDocPropertyTag)),
    new ObjectProperty("parent", true, proxy(() => JSDoc)),
    new ObjectProperty("name", true, proxy(() => EntityName)),
    new ObjectProperty("typeExpression", false, proxy(() => JSDocTypeExpression)),
    new ObjectProperty("isNameFirst", true, proxy(() => booleanType)),
    new ObjectProperty("isBracketed", true, proxy(() => booleanType)),
    new ObjectProperty("tagName", true, proxy(() => Identifier)),
    new ObjectProperty("comment", false, proxy(() => stringType)),
    ...commonNodePropertiesSansParent,
]);
