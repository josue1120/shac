(function() {
    
//          Function's read to Form's
    //readingSubjects();

    StackMob.init({
        appName: "shac",
        clientSubdomain: "josue1120outlookcom",
        publicKey: "955f9b16-7a65-4ab3-9c0b-87c00d5d9831",
        apiVersion: 0
    });
//              Ya esta listo
    $('#CreateSubject').click(function(e) {
        e.preventDefault();
    
        var nameSubject = $('#nameNewSubject').val();
        
        var Subjects = StackMob.Model.extend({ schemaName: 'subjects' });
    	var subjects = new Subjects({ subjects: nameSubject });
		subjects.create();
    
        console.log("Are you creating a new subject called (" + nameSubject + ").");
        
        subjects = new Subjects();

        subjects.fetch({
            success: function(model) {
                console.log(model.toJSON());
            },
            error: function(mode, response) {
                console.log(response);
            }
        });
    });
//              Ya esta listo
    $('#CreateGroup').click(function(e) {
        e.preventDefault();
        
        var nameGroup = $('#nameNewGroup').val();
        var sectionGroup = $('#section').val();
        
        var Group = StackMob.Model.extend({ schemaName: 'group_name' });
        var group = new Group({ name: nameGroup , section: sectionGroup });
		group.create();
    
        console.log("Are you creating a new group called (" + nameGroup + ") in the section (" + sectionGroup + ").");
        
        group = new Group();

        group.fetch({
            success: function(model) {
                console.log(model.toJSON());
            },
            error: function(mode, response) {
                console.log(response);
            }
        });
    });
//              Para desarrollar
    $('#CreateActivity').click(function(e) {
        e.preventDefault();
    
        var day = $('#datepicker').val();
        var subjet = $('#subjet').val();
        var activity = $('#activity').val();
        //entry.create();
    
        console.log("You are creating a new activity the day ("+ day +") in the subject ("+ subjet +") with the description of activity ("+ activity +").");
    });
//              DatePicker for day@CreateActivity
    $(function() {
        $( "#datepicker" ).datepicker({ showAnim: "slideDown" });
    });
//              ReadingSubjects - Function - Para Desarrollar
    /* var readingSubjects = function() {
        //      The read function here
        var nameSubject = $('#nameNewSubject').val();
        
        var Subjects = StackMob.Model.extend({ schemaName: 'subjects' });
        var subjects = new Subjects({ subjects: nameSubject });
        subjects.create();
        
        subjects = new Subjects();
        
        subjects.fetch({
            success: function(model) {
                console.log(model.toJSON());
                    $.each(items, function(ix, subjects); {
                        $('#subjectContainer').append('<option>' + subjects + '</option>');
                    });
            },
            error: function(mode, response) {
                console.log(response);
            }
        });
    }; */
})();

//      Project base JsFiddle ==> http://jsfiddle.net/4Z44s/
//      Project of Fetch ==> http://jsfiddle.net/Kgkq7/1/
//      Project of jQuery ==> http://jsfiddle.net/HwEg4/1/