import { getDatabase, ref, set } from 'firebase/database'
import { db } from '../src/components/config'

export default function createIncome(userId, str1) {
  set(ref(db, 'incomes/' + userId), {
    categoryId: str1,
    accountId: str1
  })
}
