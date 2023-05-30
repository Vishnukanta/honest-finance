import Realm from 'realm'

class Account extends Realm.Object<Account> {
  _id!: Realm.BSON.ObjectId
  name!: string
  icon!: Realm.List<Icon>
  balance!: number
  incomes?: Realm.List<Income>
  expenses?: Realm.List<Expense>

  static schema = {
    name: 'Account',
    properties: {
      _id: 'objectId',
      name: 'string',
      icon: 'Icon[]',
      balance: 'double',
      incomes: 'Income[]',
      expenses: 'Expenses[]',
    },
    primaryKey: '_id',
  }
}

class Currency extends Realm.Object<Currency> {
  id!: Realm.BSON.ObjectId
  icon!: Realm.List<Icon>
  name!: string
  accounts?: Realm.List<Account>

  static schema = {
    name: 'Currency',
    properties: {
      _id: 'objectId',
      icon: 'Icon[]',
      name: 'string',
      accounts: 'Account[]',
    },
    primaryKey: '_id',
  }
}

class Expense extends Realm.Object<Expense> {
  _id!: Realm.BSON.ObjectId
  sum!: number
  transaction_dt!: Date
  note?: string
  satisfaction?: number
  principle?: number

  static schema = {
    name: 'Expense',
    properties: {
      _id: 'objectId',
      sum: 'int',
      transaction_dt: 'date',
      note: 'string',
      satisfaction: 'int',
      principle: 'int',
    },
    primaryKey: '_id',
  }
}

class Income extends Realm.Object<Income> {
  _id!: Realm.BSON.ObjectId
  sum!: number
  transaction_dt!: Date
  note?: string
  satisfaction?: number
  principle?: number

  static schema = {
    name: 'Income',
    properties: {
      _id: 'objectId',
      sum: 'int',
      transaction_dt: 'date',
      note: 'string',
      satisfaction: 'int',
      principle: 'int',
    },
    primaryKey: '_id',
  }
}

class Category extends Realm.Object<Category> {
  _id!: Realm.BSON.ObjectId
  icon!: Realm.List<Icon>
  name!: string
  type!: string

  static schema = {
    name: 'Category',
    properties: {
      _id: 'objectId',
      icon: 'Icon[]',
      name: 'string',
      type: 'string',
    },
    primaryKey: '_id',
  }
}

class Icon extends Realm.Object<Icon> {
  _id!: Realm.BSON.ObjectId
  name!: string
  svg!: ArrayBuffer
  iconType!: IconType

  static schema = {
    name: 'Icon',
    properties: {
      _id: 'objectId',
      name: 'string',
      svg: 'data', 
      iconType: '{}'
    },
    primaryKey: '_id'
  }
}

interface IconType extends Realm.Dictionary {
  _id: number
  code: string
  name: string
}
