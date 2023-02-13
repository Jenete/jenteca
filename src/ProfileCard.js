import React from 'react'


const ProfileCard = () => {
  var user = {name:"User",surname:"1",id:"**************",payments:"",email:"user@mail.com",tel:"07*********",parentTel:"0*********"};
  function getUser(){
    try{
      user = JSON.parse(localStorage.getItem("user"));
      //console.log(user);
    }catch(e){
      user = {name:"User",surname:"1",id:"**************",payments:"",email:"user@mail.com",tel:"07*********",parentTel:"0*********"};
    
    }
  }
  getUser();

  var user2 = user;
  if (user2 === null) user2 = {name:"User",surname:"1",id:"**************",payments:"",email:"user@mail.com",tel:"07*********",parentTel:"0*********"};
  return (
    <div>
      <section style={{"backgroundColor": "#9de2ff"}}>
  <div className="container h-100 bg-lightgray">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-md-9 col-lg-7 col-xl-5">
        <div className="card" style={{"borderRadius": "15px"}}>
          <div className="card-body p-4">
            <div className="d-flex text-black">
              <div className="flex-grow-1 ms-3">
                <h5 className="mb-1">{user2.name+" "+user2.surname}</h5>
                <p className="mb-2 pb-1" style={{"color":" #2b2a2a"}}>{user2.subjects}</p>
                <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                  style={{"backgroundColor": "#efefef"}}>
                  <div>
                    <p className="small text-muted mb-1">Email</p>
                    <p className="mb-0">{user2.email}</p>
                  </div>
                  <div className="px-3">
                    <p className="small text-muted mb-1">Tel</p>
                    <p className="mb-0">{user2.tel}</p>
                  </div>
                  
                </div>
                <div className="d-flex pt-1">
                  <button type="button" className="btn btn-info flex-grow-1">Edit profile</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default ProfileCard
