

@RestResource(urlMapping='/showAccounts/*')
global class checkAccount
{

@HttpGet
global static LIST<Account> getAccount()
{
LIST<Account> lst;
try
{
lst = [select name, phone from Account];
return lst;
}
catch(Exception ex)
{
system.debug('Error'+ex.getMessage());
}
return lst;
}

}

Workbeanch (REST Explorer)-Example

https://workbench.developerforce.com/restExplorer.php
/services/apexrest/showAccounts
/services/apexrest/showAccountsDetails