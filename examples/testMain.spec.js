describe('Home', function () {

    beforeEach(function () {

    	// Define host in proxy at karma configuration file.
        browser().navigateTo('/home.html');

    });

    it('Loading Mask is Hidden', function () {
        
        browser().getExt(

                function(ext){
                    
                	 // Add a listener for the real hide operation of the loading mask
                	 // 'ext' is index.html 'Ext' object
                     ext.get('wegba-loading-mask').on('hide',function(){
                         
                         
                         // Run test.
                         expect( { value: false } ).toBe( 

                         	ext.get('wegba-loading-mask').isVisible() 

                         );
                         
                     });
                         
                }

        );
        
    });
   
});
