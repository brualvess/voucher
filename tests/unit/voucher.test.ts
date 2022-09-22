import * as voucher from '../../src/services/voucherService'

describe('Teste unitário do voucher',()=>{
   
    it('é um valor válido para desconto', async()=>{
        const value = 550
       voucher.isAmountValidForDiscount(value)
       
    })
    it('Alterar o voucher para usado', async()=>{
        const code = 'A21A'
        voucher.changeVoucherToUsed(code)
    })
    it('Aplicar o desconto', async()=>{
        const value = 203
        const discount = 40
        const result = voucher.applyDiscount(value, discount)
        expect(result).toEqual(value - value * (discount / 100))

    })
    it('Aplicar Voucher', async()=>{
        const code = 'A21A'
        const amount = 508
        const result = await voucher.applyVoucher(code, amount)
        expect(result.amount).toEqual(amount)
    })

})