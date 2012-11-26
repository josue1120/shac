(function() {

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
    });
//              Ya esta listo
    $('#CreateGroup').click(function(e) {
        e.preventDefault();
        
        var nameGroup = $('#nameNewGroup').val();
        var sectionGroup = $('#sectionsContainer').val();
        
        var Group = StackMob.Model.extend({ schemaName: 'group_name' });
        var group = new Group({ name: nameGroup , section: sectionGroup });
		group.create();
    
        console.log("Are you creating a new group called (" + nameGroup + ") in the section (" + sectionGroup + ").");
    });
//              Ya esta listo
    $('#CreateSection').click(function(e) {
        e.preventDefault();
    
        var nameSection = $('#nameNewSection').val();
        
        var Section = StackMob.Model.extend({ schemaName: 'sections' });
        var section = new Section({ sections: nameSection });
		section.create();
    
        console.log("Are you creating a new section called (" + nameSection + ").");
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

//              ReadingSubjects - Function - Ya esta lista
    var readingSubjects = function() {
        var Subjects = StackMob.Model.extend({ schemaName: 'subjects' });
        
        subjects = new Subjects();
    
        subjects.fetch({
            success: function(model) {
                var data = model.toJSON(); // Debes obtener los datos!
                $.each(data, function(ix, subject) {
                    $('#subjectContainer').append('<option>' + subject.subjects + '</option>');
                    
                });
            },
            error: function(mode, response) {
                console.log(response);
            }
        });
    };

//              ReadingSections - Function - Ya esta lista
    var readingSections = function() {        
        var Sections = StackMob.Model.extend({ schemaName: 'sections' });
        
        sections = new Sections();
    
        sections.fetch({
            success: function(model) {
                var data = model.toJSON(); // Debes obtener los datos!
                $.each(data, function(ix, sections) {
                    $('#sectionsContainer').append('<option>' + sections.sections + '</option>');
                    
                });
            },
            error: function(mode, response) {
                console.log(response);
            }
        });
    };
    
//              Function's read to Form's
    readingSubjects();
    readingSections();
})();

//      Project base JsFiddle ==> http://jsfiddle.net/4Z44s/
//      Project of Fetch ==> http://jsfiddle.net/Kgkq7/1/
//      Project of jQuery ==> http://jsfiddle.net/HwEg4/1/