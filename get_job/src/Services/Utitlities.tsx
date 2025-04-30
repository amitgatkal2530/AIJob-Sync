const formatDate=(dateString:string)=>{
    const date=new Date(dateString);
    const options={year:"numeric" as const,month:"short"as const};
    return date.toLocaleString('en-US',options);
}


 const timeAgo = (time:string) => {
    const now = new Date();
    const postDate = new Date(time);
    const diff = Math.floor((now.getTime() - postDate.getTime()) / 1000); // Convert milliseconds to seconds

    if (diff < 60) return `${diff} seconds ago`;
    
    const minutes = Math.floor(diff / 60);
    if (minutes < 60) return `${minutes} minutes ago`;

    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hours ago`;

    const days = Math.floor(hours / 24);
    if (days < 30) return `${days} days ago`;

    const months = Math.floor(days / 30.44); // Average month length
    if (months < 12) return `${months} months ago`;

    const years = Math.floor(days / 365);
    return `${years} years ago`;
 }

    const getBase64 = (file: File) => {
        return new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = (error) => reject(error);
        });
      };
    const formatInterviewTime=(dateStr:any)=>{
      const date=new Date(dateStr);
      return date.toLocaleString('en-US',{
        year:'numeric',
        month:'long',
        day:'numeric',
        hour:'numeric',
        minute:'numeric',
        hour12:true
      })
    }
    function openBase64PDF(base64String:string){
      const byteCharacters=atob(base64String);
      const byteNumbers=new Array(byteCharacters.length);
      for(let i=0;i<byteCharacters.length;i++){
        byteNumbers[i]=byteCharacters.charCodeAt(i);
      }
      const byteArray=new Uint8Array(byteNumbers);
      const blob=new Blob([byteArray],{type:'application/pdf'});
      const blobURL=URL.createObjectURL(blob);
      window.open(blobURL,'_blank');

      
    }
export{formatDate,timeAgo,getBase64,formatInterviewTime,openBase64PDF};

