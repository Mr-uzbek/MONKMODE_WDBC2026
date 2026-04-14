const financeManager = { 
    hotelName: "Islambek hotel",
    balance: 1000, 
    processPayment(amount){ 
        try {
            if (typeof amount !== `number`){ 
                throw new Error("To'lov summasi raqam bo'lishi shart")
            } else if ( amount <= 0) {
                throw new Error(`To'lov summasi 0 dan katta bo'lishi kerak`)
            }else { 
                this.balance += amount; 
                console.log(`to'lov qabul qilindi balance ${this.balance}`)
            }
        } catch (error) {
            console.log(error.message)
        }
    }
}

financeManager.processPayment('a')