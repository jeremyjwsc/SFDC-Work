@RestResource(urlMapping='/RESTWebAccountServicesAPI/*')
global class RESTWebAccountServicesAPI {

@HttpGet
global static List<Account> getAccountDetails(){

String AccountID = RestContext.request.params.get('AccountID');
String city = RestContext.request.params.get('city');
String zip = RestContext.request.params.get('Zipcode');

List<Account> acc =[Select ID, Name from Account];
return acc;
}


@HttpDelete
global static String deleteOldCases(){
String AccountID = RestContext.request.params.get('AccountID');
Account acc = [Select ID, Name from Account where ID=:AccountID];
delete acc;
return 'Delete Done';

}

@HttpPost //Creating the data/updating
global static String createAccountPost(String AccountID, String AccountName)
{

 String responseJson='';
     
 Account newAcc=new Account();
 newAcc.name=AccountName;
 newAcc.AccountNumber=AccountID;

 try
 {
 upsert newAcc;
  
  responseJson='{"Status":"Success", "ErrorCode":"200", "Message":"Success","ID":'+newAcc+'}';
 }
catch(Exception e)
{
responseJson='{"Status":"Failure", "ErrorCode":"404", "Message":'+e.getMessage()+'}';
 }

return responseJson;

}

@HttpPut //Creating the updating
global static String createAccountPut(String AccountID, String AccountName)
{

 String responseJson='';
     
 Account newAcc=new Account();
 newAcc.name=AccountName;
 newAcc.AccountNumber=AccountID;

 try
 {
 upsert newAcc;
  
  responseJson='{"Status":"Success", "ErrorCode":"200", "Message":"Success"}';
 }
catch(Exception e)
{
responseJson='{"Status":"Failure", "ErrorCode":"404", "Message":'+e.getMessage()+'}';
 }

return responseJson;

}

}






