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
Account result=[SELECT Id,Name,Industry,AnnualRevenue,Phone,Website,UpsellOpportunity__c,
Active__c,NumberofLocations__c FROM Account WHERE Id=:AccountId];
return result;
}

}

Workbeanch (REST Explorer)-Example

https://workbench.developerforce.com/restExplorer.php
/services/apexrest/showAccountsDetails/0010X00004DWeeL

Results:

Raw Response
HTTP/1.1 200 OK
Date: Tue, 28 Aug 2018 14:27:26 GMT
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Content-Security-Policy: upgrade-insecure-requests 
X-Robots-Tag: none
Cache-Control: no-cache,must-revalidate,max-age=0,no-store,private
Set-Cookie: BrowserId=ILt5IdTnRpKUkFffOw3lRA;Path=/;Domain=.salesforce.com;Expires=Sat, 27-Oct-2018 14:27:26 GMT;Max-Age=5184000
Expires: Thu, 01 Jan 1970 00:00:00 GMT
Content-Type: application/json;charset=UTF-8
Vary: Accept-Encoding
Content-Encoding: gzip
Transfer-Encoding: chunked


{
  "attributes" : {
    "type" : "Account",
    "url" : "/services/data/v43.0/sobjects/Account/0010X00004DWeeLQAT"
  },
  "Id" : "0010X00004DWeeLQAT",
  "Name" : "Pyramid Construction Inc.",
  "Industry" : "Construction",
  "AnnualRevenue" : 950000000,
  "Phone" : "(014) 427-4427",
  "Website" : "www.pyramid.com",
  "UpsellOpportunity__c" : "Maybe",
  "Active__c" : "Yes",
  "NumberofLocations__c" : 17
}


Expand All | Collapse All | Hide Raw Response
attributes
Id: 0010X00004DWeeLQAT
Name: Pyramid Construction Inc.
Industry: Construction
AnnualRevenue: 950000000
Phone: (014) 427-4427
Website: www.pyramid.com
UpsellOpportunity__c: Maybe
Active__c: Yes
NumberofLocations__c: 17


