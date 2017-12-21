$(document).ready(function(){
   // alert('hello motto!');

//    $.ajaxSetup({
//        headers: {
//            'X-CSRF-TOKEN':$('meta[name="_token"]').attr('content')
//        }
//    })

   $('.edit-select').hide();
   var editable = false;

//    $("#send_to_qa").on('click',function(e){
//     e.preventDefault();
//     alert('sending to Q A');
//    })
   
   $("#missing_assets").on('click',function(e){
    e.preventDefault();
    $('#exampleModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var recipient = button.data('whatever') // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this)
        modal.find('.modal-title').text('New message to ' + recipient)
        modal.find('.modal-body input').val(recipient)
      })
    //alert('Missing assets');
   })

    $('#edit_project').on('click',function(e){
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN':$('meta[name="_token"]').attr('content')
            }
        });
        e.preventDefault();
        $editButton = $(this);
        $currentText = $editButton.text();
      
        console.log('current text '+$currentText);
        if($.trim($currentText)=='Save'){
            var status_id = $("#status_id").val();
            var type_id = $("#type_id").val();
            var stage_id = $("#stage_id").val();
            var priority_id = $("#priority_id").val();
            var project_id = $('#p_id').data('project');
             var project_info = {
                    'status_id': status_id,
                    'type_id':type_id,
                    'stage_id':stage_id,
                    'priority_id':priority_id
             }
             console.log('p_id',project_id);
             console.log(project_info);
             $.ajax({
                 type:'PUT',
                 url:'/update/projects/'+project_id,
                 data:project_info,
                 dataType:'json',
                 success: function(data){
                    console.log(data);
                    $("#edit_project_notification").show('Edit was successful');
                    
                    $("#type_value").text(data.project.type['name'])
                    $("#stage_value").text(data.project.stage['name'])
                    $("#priority_value").text(data.project.priority['name'])
                    $("#status_value").text(data.project.status['name'])
                 },
                 error: function(error){
                        console.log('error',error);
                 }
             })
            console.log('saving now ....',project_info);
        }
        if($.trim($currentText) =='Save'){
            $editButton.html(' <a><i class="fa fa-pencil-square-o aria-hidden="true"></i> Edit</a>');        
            editable = true;  
            $('.current-select').show(); 
            $('.edit-select').hide();          
        }
        else{
            $editButton.html(' <a><i class="fa fa-floppy-o" aria-hidden="true"></i> Save</a>');
            $('.current-select').hide(); 
            $('.edit-select').show();
            editable = false;
        }
    
        //console.log( $(this));
    })

    $('.action_btn').on('click',function(e){
        e.preventDefault();
        //alert('clicked');
        console.log(e);
        console.log(e.target);
        console.log(e.target.innerText);
        console.log($(this).data('value'));

        $.ajax({
            url:'my-projects',
            method:'get',
            beforeSend:function(){
                    alert('before');
            },
            success:function(data){
                alert('success');
                console.log(data);
            },
            error:function(){
                alert('failure');
            },
            complete: function(){
                alert('complete');
            }
        });


    })
})