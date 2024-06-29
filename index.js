

submit.addEventListener('click', function(e){

  file = e.target.files[0];


  let storageRef = firebase.storage().ref("cv/"+file.name);
  let task = storageRef.put(file);

  task.on('state_changed',function progress(snapshot){

    let percentage= snapshot.bytesTransferred/ snapshot.totalBytes *100;
    console.log("Upload is "+ percentage + "%done");

    switch(snapshot.state){
      case firebase.storage.TaskState.PAUSED :
        console.log("upload is paused");
        break;

        case firebase.storage.TaskState.RUNNING :
        console.log("upload is running");
        break;
        


    }
  })
});