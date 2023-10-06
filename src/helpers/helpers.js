/* eslint-disable */
export const handleErrors = (err, scope) => {
    console.log('err', err);
    let status = err.message.match(/\d+/);
    status = status[0] ? parseInt(status[0]) : false;
    switch (status) {
      case 401:
      case 403:
        // alert("Sorry you're not authorized to access the data, please re-login");
        // scope.$router.push({
        // 	name: "Logout"
        // });
        break;
      case 404:
        alert("Sorry, error occured from our end");
        break;
      case 500:
        alert("Sorry, server error occured");
        break;
  
    }
  
    return true;
  }