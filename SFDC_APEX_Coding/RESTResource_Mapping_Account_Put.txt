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

}

Workbeanch (REST Explorer)-Example

Select POST

https://workbench.developerforce.com/restExplorer.php


/services/apexrest/showAccountsDetails/

Request Body - Example

{
"Name":"JWill Solutions Limited.",
"Phone":"123456789",
"AccountNumber":"4578455
}

Then Execute

Results:

Raw Response
HTTP/1.1 200 OK
Date: Tue, 28 Aug 2018 09:42:26 GMT
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Content-Security-Policy: upgrade-insecure-requests 
X-Robots-Tag: none
Cache-Control: no-cache,must-revalidate,max-age=0,no-store,private
Set-Cookie: BrowserId=aBnPhoBQSH6oGiPo69Y2hQ;Path=/;Domain=.salesforce.com;Expires=Sat, 27-Oct-2018 09:42:26 GMT;Max-Age=5184000
Expires: Thu, 01 Jan 1970 00:00:00 GMT
Content-Type: application/json;charset=UTF-8
Vary: Accept-Encoding
Content-Encoding: gzip
Transfer-Encoding: chunked


"0010X00004FEfs5QAD"


Expand All | Collapse All | Hide Raw Response
0: 0
1: 0
2: 1
3: 0
4: X
5: 0
6: 0
7: 0
8: 0
9: 4
10: F
11: E
12: f
13: s
14: 5
15: Q
16: A
17: D
