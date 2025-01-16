trigger AccountTrigger on Account (before insert) {
    for (Account acc : (List<Account>)Trigger.new ) {
        if(acc.Name == 'a')
        acc.Name='b';
        else{
            acc.Name = 'c';
        }
    }
}