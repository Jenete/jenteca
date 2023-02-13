import { getFiles, files,vfiles, getVideos } from "./FirebaseAuthandStorage";
export async function getTasks(){
    function sortFiles(nfiles){
        var newfiles = [];
        nfiles.forEach((item) =>  {
            const counter = count(nfiles,item);
            //console.log(counter);
            if (counter >= 2){
              if(count(newfiles,item) === 0){
              //console.log("Found duplicate");
              newfiles.push(item);}
            }
            });
        
        newfiles = newfiles.sort((a,b)=> {
          if (a.name > b.name) return 1;
          else if (a.name === b.name) return 0;
          else return -1;
        });
        return newfiles;
      }
      function count(nfiles, file){
        var counter = 0;
        nfiles.forEach((element)=>{
          if(element.href === file.href){
            counter++;
          }
        })
        return counter;
      }
        var tasks = []
        tasks = await getFiles();
        if (tasks.length ===0) {tasks = await getFiles()};
        //console.log(sortFiles(tasks2));
        if (files.length > tasks.length) tasks = await getFiles();
        //else {tasks2 = files;}
        //console.log(sortFiles(tasks2));
      
      return sortFiles(tasks);
}
export async function getLessons(){
    function sortFiles(xfiles){
        var newfiles = [];
        xfiles.forEach((item) =>  {
            const counter = count(xfiles,item);
            //console.log(counter);
            if (counter >= 2){
              if(count(newfiles,item) === 0){
              //console.log("Found duplicate");
              newfiles.push(item);}
            }
            });
        
        newfiles = newfiles.sort((a,b)=> {
          if (a.name > b.name) return 1;
          else if (a.name === b.name) return 0;
          else return -1;
        });
        return newfiles;
      }
      function count(xfiles, file){
        var counter = 0;
        xfiles.forEach((element)=>{
          if(element.href === file.href){
            counter++;
          }
        })
        return counter;
      }
        var tasks2 = []
        tasks2 = await getVideos();
        if (tasks2.length ===0) {tasks2 = await getVideos()};
        //console.log(sortFiles(tasks2));
        if (vfiles.length > tasks2.length) tasks2 = await getVideos();
        //else {tasks2 = files;}
        //console.log(sortFiles(tasks2));
      
      return sortFiles(tasks2);
}