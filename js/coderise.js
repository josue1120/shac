(function() {
    
    var titleWeb = 'SHAC - Institución Educativa';
    
    $('#titleWeb').append( titleWeb );
    
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
//              Ya esta listo
    $('#CreateActivity').click(function(e) {
        e.preventDefault();
        
        var day = $('#datepicker').val();
        var subject = $('#subjectContainer').val();
        var activity = $('#activity').val();
        
        var Activity = StackMob.Model.extend({ schemaName: 'activities' });
        var newActivity = new Activity({ day: day , subject: subject , activity: activity });
        newActivity.create();
        
        console.log("You are creating a new activity the day ("+ day +") in the subject ("+ subject +") with the description of activity ("+ activity +").");
    });


//              Ya esta listo
    $('#RegisterUser').click(function(e) {
        e.preventDefault();
    
        var userRegister = $('#userRegister').val();
        var passRegister = $('#passRegister').val();
        
        var UserRDB = StackMob.Model.extend({ schemaName: 'user' });
        var userrdb = new UserRDB({ user: userRegister , pass: passRegister });
        userrdb.create({
            success: function(model) {
                console.debug("User object is saved, The username is: " + userRegister );
                alert("The User is created, The username is: " + userRegister );
            },
            error: function(model, response) {
                console.debug(response);
            }
        });
    });
//              Desarrollando                                       Desarrollando
    $('#LoginUser').click(function(e) {
        e.preventDefault();
    
        var userLogin = $('#userLogin').val();
        var passLogin = $('#passLogin').val();
        
        var User = StackMob.Model.extend({ schemaName: 'user' });
        var userLDB = new StackMob.User({ user: 'test' , pass: 'test' });
        userLDB.login(false, {
            success: function(model) {
                window.location="panel.html";
                console.log("good luck");
                console.debug(model);
            },
            error: function(model, response) {
                console.log("bad luk");
                console.debug(response);
            }
        });
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
//              ReadingActivities - Function - Ya esta listo
    var readingActivities = function() {        
        var Activities = StackMob.Model.extend({ schemaName: 'activities' });
        
        activities = new Activities();
    
        activities.fetch({
            success: function(model) {
                var data = model.toJSON(); // Debes obtener los datos!
                console.log( data )
                $.each(data, function(ix, entry) {
                    $('#tableContainer').append('<tr>' + '<td>' + entry.day + '</td>' + '<td>' + entry.subject + '</td>' + '<td>' + entry.activity + '</td>' + '</tr>');
                   // console.log( activities.day + activities.subject + activities.activity );
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
    readingActivities();
})();
//      Project base JsFiddle ==> http://jsfiddle.net/4Z44s/
//      Project of Fetch ==> http://jsfiddle.net/Kgkq7/1/
//      Project of jQuery ==> http://jsfiddle.net/HwEg4/1/