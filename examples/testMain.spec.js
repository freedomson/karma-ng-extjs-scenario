describe('Home', function () {

    beforeEach(function () {

    	// Define host in proxy at karma configuration file.
        browser().navigateTo('/home.html');

    });

    it('Loading Mask is Hidden', function () {
        
        browser().getExt(

                function(ExtJS){
                    
                     ext.get('wegba-loading-mask').on('hide',function(){
                         
                         
                         expect( { value: false } ).toBe( 

                         	ExtJS.get('wegba-loading-mask').isVisible() 

                         );
                         
                     });
                         
                }

        );
        
    });
   
});
