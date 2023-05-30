import Realm from 'realm'

const config = {
  schema: [],
  path: '/data/transactions.realm',
}

export async function openRealm(): Promise<Realm> {
  const realm = await Realm.open(config)
  return realm
}

export function closeRealm(realm: Realm): void {
  realm.close()
}
