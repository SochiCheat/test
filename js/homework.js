
$(document).ready(function(){
    db.collection('homeworks').get().then(data =>{
        var store = "";
        data.forEach(element => {
            store += `
                <div class="card shadow-lg mt-4">
                    <div class="card-header">
                    
                        <img src="${element.data().post}" style="border-radius:50%" width="50" height="50">
                        ${element.data().name}
                        <!-- Trigger the modal with a button -->
                        <button type="button" class="btn btn-info btn-lg float-right" data-toggle="modal" data-target="#alert${element.id}">View</button>
                    </div>
                    <div class="card-body">
                        <img src="${element.data().profile}" class="img-fluid"/>
                        ${element.data().text}
                    </div>
                    
                    <div class="card-footer">
                       
                        <button type="button" class="btn btn-danger float-right" data-dismiss="modal" onclick="deleteId('${element.id}')">Delete</button>
                      
                    </div>
               
                </div>

                <div class="container">
  
  

  <!-- Modal -->
  <div class="modal fade" id="alert${element.id}" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>

        </div>
        <div class="modal-body">
        <img src="${element.data().profile}" class="img-fluid"/>
        </div>
        <div class="modal-footer">
          
        </div>
      </div>
      
    </div>
  </div>
  
</div>

            `;
        });
        $("#result").append(store);
    });
    $('#add').on('click',function(){
        var name = $('#name').val();
        var profile= $('#pro').val();
        var post = $('#post').val();
        var text = $('#text').val();
        db.collection('homeworks').add({
            name: name,
            profile:profile,
            post:post,
            text:text,
        })
      
    })
   
});
 function deleteId(fileId){
     db.collection('homeworks').doc(fileId).delete();
 }