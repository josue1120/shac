(function() {
    
    var titleWeb = 'S.H.A.C - Sistema de Horarios y Actividades para Colegios';
    
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
        alert("Are you creating a new group called (" + nameGroup + ") in the section (" + sectionGroup + ").");
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
        var group = $('#groupContainer').val();
        
        var Activity = StackMob.Model.extend({ schemaName: 'activities' });
        var newActivity = new Activity({ group: group, day: day , subject: subject , activity: activity });
        newActivity.create();
        
        console.log("You are creating a new activity in the group ("+ group +"), in the day ("+ day +"), in the subject ("+ subject +") with the description of activity ("+ activity +").");
    });


//              Ya esta listo
    $('#RegisterUser').click(function(e) {
        e.preventDefault();
    
        var userRegister = $('#userRegister').val();
        var passRegister = $('#passRegister').val();
        
        var UserRDB = StackMob.Model.extend({ schemaName: 'user' });
        var userrdb = new UserRDB({ username: userRegister , password: passRegister });
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
//              Ya esta listo
    $('#LoginUser').click(function(e) {
        e.preventDefault();
        
        var userLogin = $('#userLogin').val();
        var passLogin = $('#passLogin').val();
        
        var user = new StackMob.User({ username: userLogin, password: passLogin });
        
        //Makes a call to StackMob to request a login
        user.login(false, {
            success: function(model) {
                //show a success message/update your UI
                $('#alert-success').append('<center><div class="alert alert-success" style="font-size:12px"><button type="button" class="close" data-dismiss="alert">&times;</button>Good luck, The username or password is correct</div></center>');
                window.location="panel.html";
                console.log("Good luck");
            },
            error: function(model, response) {
                //show a failure message in your app
                console.log("Bad luck, The username or password is incorrect");
                $('#alert-error').append('<center><div class="alert alert-error" style="font-size:12px"><button type="button" class="close" data-dismiss="alert">&times;</button>Bad luck, The username or password is incorrect</div></center>');
            }
        });
    });
//              Ya esta listo
    $('#LogoutUser').click(function(e) {
        e.preventDefault();
        
        var user = new StackMob.User( { username: StackMob.getLoggedInUser() } );
 
        //Makes a call to StackMob to logout
        user.logout({
            success: function() {
                //show a success message/update your UI
                window.location="login.html";
            },
            error: function() {
                //show a failure message in your app
                console.log("Bad luck");
            }
        });
    });
//              Ya esta listo
    $('#ifLogin').before(function(e) {
        
        if ( StackMob.isLoggedIn() === true) {
            console.log("It's Logged In");
        } else {
            window.location="login.html";
        }
    });
//              Ya esta listo
    $('#ifLoginPanel').before(function(e) {
        
        if ( StackMob.isLoggedIn() === true) {
            console.log("It's Logged In");
            window.location="panel.html";
        } else {
            console.log("It's not Logged In");
        }
    });

//              DatePicker for day@CreateActivity - Ya esta listo
    $(function() {
        $( "#datepicker" ).datepicker({ showAnim: "slideDown" });
    });


//              ReadingSubjects - Function - Ya esta listo
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
//              ReadingSections - Function - Ya esta listo
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
//              ReadingGroups - Function - Ya esta listo
    var readingGroups = function() {
        var Groups = StackMob.Model.extend({ schemaName: 'group_name' });
        
        groups = new Groups();
    
        groups.fetch({
            success: function(model) {
                var data = model.toJSON(); // Debes obtener los datos!
                $.each(data, function(ix, name) {
                    $('#groupContainer').append('<option>' + name.name + '</option>');
                    
                });
            },
            error: function(mode, response) {
                console.log(response);
            }
        });
    };
//              ReadingGroupsCal - Function - Ya esta listo
    var readingGroupsCal = function() {
        var Groups = StackMob.Model.extend({ schemaName: 'group_name' });
        
        groups = new Groups();
    
        groups.fetch({
            success: function(model) {
                var data = model.toJSON(); // Debes obtener los datos!
                $.each(data, function(ix, name) {
                    var group = name.name;
                    $('#groups').append('<li id="' + group + '"><a href="#' + group + '"> ' + group + '</a></li>');
                    
                });
            },
            error: function(mode, response) {
                console.log(response);
            }
        });
    };
//              ReadingActivities - Function - Ya esta listo                    Falta el Filtrado de datos - Terminar de Desarrollar
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
    readingGroups();
    readingGroupsCal();
})();
//      Project base JsFiddle ==> http://jsfiddle.net/4Z44s/
//      Project of Fetch ==> http://jsfiddle.net/Kgkq7/1/
//      Project of jQuery ==> http://jsfiddle.net/HwEg4/1/
//      User Authentication API ==> https://www.stackmob.com/devcenter/docs/User-Authentication-API