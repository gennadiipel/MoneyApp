export interface Transaction {
    key?: string,
    title: string,
    amount: number
    date: Date,
    tags?: string[],
    isIncome?: boolean
}