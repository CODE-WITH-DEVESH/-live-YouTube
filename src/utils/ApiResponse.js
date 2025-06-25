class ApiResponse {
    constructor(statusCode,  data, massage ="success") {
        this.statusCode = statusCode;
        this.data = data;
        this.message = massage;
        this.success = statusCode >= 200 && statusCode < 300; // Assuming success for 2xx status codes
        this.errors = [];
        
      
    }
}