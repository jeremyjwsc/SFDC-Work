@RestResource(urlMapping='/RESTWebAccountServices/*')
global class RESTWebAccountServices {
    
    
    @HttpGet
    global static AccountWrapper doGet() {
        RestRequest req = RestContext.request;
        RestResponse res = RestContext.response;
        AccountWrapper response = new AccountWrapper();
        
        String accountId = req.requestURI.substring(req.requestURI.lastIndexOf('/')+1);
        
        List<Account> result = [SELECT Id, Name, Phone, Website FROM Account WHERE Id = :accountId];
        
        if(result != null && result.size() > 0) {
            response.acct = result[0];
            response.status = 'Success';
        }
        else {
            response.acct = null;
            response.status = 'Error';
            response.message = 'This account could not be found, please try again.';
            res.StatusCode = 404;
        }
        
        return response;
    }
    
    global class AccountWrapper {
        public Account acct;
        public String status;
        public String message;
        
        public AccountWrapper(){}
    }
    }