/**
 * Created by ASUS on 2025/1/8.
 */

@IsTest
private class AccountTriggerTest {
    @IsTest
    static void testBehavior() {
        Account a = new Account();
        a.Name = 'aa';
        insert a;
        a.Name = 'a';
        update a;
        Integer e = 3;
        e = 4;
        delete a;
    }
}