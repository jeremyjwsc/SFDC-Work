@RestResource(urlMapping='/showAccountsDetails/*')
global class checkAccountDetails
{

@HttpGet
global static Account doGet()
{

RestRequest req=RestContext.request;
RestResponse res=RestContext.response;
String AccountId=req.requestURI.substring(req.requestURI.lastindexOF('/')+1);
system.debug('Account Id:'+AccountId);
Account result=[SELECT Id,Name,Industry,AnnualRevenue,Phone,Website,UpsellOpportunity__c,Active__c,NumberofLocations__c FROM Account WHERE Id=:AccountId];
return result;
}

@HttpPost
global static String doPost(String Name, String Phone, String AccountNumber)
{
Account acc = new Account();
acc.Name=Name;
acc.Phone=Phone;
acc.AccountNumber=AccountNumber;
insert acc;
return acc.id;
}

@HttpDelete
global static void doDelete()
{

RestRequest req=RestContext.request;
RestResponse res=RestContext.response;
String AccNumber=req.requestURI.substring(req.requestURI.lastindexOF('/')+1);
Account result=[SELECT Id,Name,Phone FROM Account WHERE AccountNumber=:AccNumber];
delete result;
}

}

Workbeanch (REST Explorer)-Example 

Select DELETE

https://workbench.developerforce.com/restExplorer.php


/services/apexrest/showAccountsDetails/4578455

Then Execute

Results:

Raw Response
HTTP/1.1 200 OK
Date: Tue, 28 Aug 2018 10:01:15 GMT
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Content-Security-Policy: upgrade-insecure-requests 
X-Robots-Tag: none
Cache-Control: no-cache,must-revalidate,max-age=0,no-store,private
Set-Cookie: BrowserId=LKLHOcX5RPO3JmZfvakH7g;Path=/;Domain=.salesforce.com;Expires=Sat, 27-Oct-2018 10:01:15 GMT;Max-Age=5184000
Expires: Thu, 01 Jan 1970 00:00:00 GMT
Transfer-Encoding: chunked

Record deleted
The record you attempted to access has been deleted. 
The user who deleted this record may be able to recover it from the Recycle Bin. 
Deleted data is stored in the Recycle Bin for 15 days. 
