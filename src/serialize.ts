/*
 * To serialize a field:
 * 
 * if optional, check if field is missing / value is undefined
 * get type of field
 * if type of union, how to classify?
 *  if subtypes of union have identical prototype, need a way to differentiate (`kind` field?)
 */