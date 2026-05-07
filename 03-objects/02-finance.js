// Obyekt metodlari + try/catch + this
// Moliyaviy amallarni boshqarish

const financeManager = {
    hotelName: "Islambek Hotel",
    balance: 1000,
    processPayment(amount) {
        try {
            if (typeof amount !== 'number') {
                throw new Error("To'lov summasi raqam bo'lishi shart");
            }
            if (amount <= 0) {
                throw new Error("To'lov summasi 0 dan katta bo'lishi kerak");
            }
            this.balance += amount;
            console.log(`To'lov qabul qilindi. Balans: ${this.balance}`);
        } catch (error) {
            console.log('Xato:', error.message);
        }
    }
};

financeManager.processPayment(200);   // To'lov qabul qilindi. Balans: 1200
financeManager.processPayment('a');   // Xato: To'lov summasi raqam bo'lishi shart
financeManager.processPayment(-50);   // Xato: To'lov summasi 0 dan katta bo'lishi kerak
