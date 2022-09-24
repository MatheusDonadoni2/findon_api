interface ICreateExpenses_itens {
    id_user: string
    description: string
    amount: number
}
interface ICreateExpenses {
    description: string
    id_users_relatitions: string[]
    itens: ICreateExpenses_itens[]
}

export { ICreateExpenses, ICreateExpenses_itens }