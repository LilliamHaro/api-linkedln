window.addEventListener('load', function() {
  // Setup an event listener to make an API call once auth is complete

       IN.Event.on(IN, "auth", getProfileData);

   // Handle the successful return from the API call
   function onSuccess(data) {
       console.log(data);
      let name = data.firstName + ' ' + data.lastName;
      window.localStorage.setItem('user-name', name);
      window.location.href = 'views/profile.html';
   }

   // Handle an error response from the API call
   function onError(error) {
       console.log(error);
   }

   // Use the API call wrapper to request the member's basic profile data
   function getProfileData() {
       IN.API.Raw("/people/~").result(onSuccess).error(onError);
   }


});
