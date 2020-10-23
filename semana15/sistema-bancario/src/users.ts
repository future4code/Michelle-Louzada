type Payments = {
    valuePayments: number,
    data: Date | string,
    description: string
}


export type User = {
    id: number,
    name: string,
    cpf: string,
    dateOfBirth: string | Date,
    saldo: number,
    extrato: Payments[]
}

 export let users: User[] = [
    {
        id: 1,
        name: "Alice",
        cpf: "125-256-456-12",
        dateOfBirth: "12/03/1997",
        saldo: 100.00,
        extrato: [
            {
                valuePayments: 0.00,
                data: "",
                description: ""
            }
        ]
    },
    {
        id: 2,
        name: "Ana",
        cpf: "125-256-456-13",
        dateOfBirth: "12/03/1980",
        saldo: 0.00,
        extrato: [
            {
                valuePayments: 50.00,
                data: "12/10/2019",
                description: "compras no supermercado"
            }
        ]
    },
]