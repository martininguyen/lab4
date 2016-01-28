exports.viewProject = function(req, res) {
  // controller code goes here
  var name = req.params.name;
  console.log("The project name is: " + name);
  res.render('project', {
    'projectName': name,
	'review' : [
		{ 'occu': 'User'
		  'desc': 'Salient need'		
		},
		{ 'occu': 'Schoolteacher'
		  'desc': 'Wants to know what music students are listening to so he can integrate it into his lessons.'	
		},
		{ 'occu': 'Student 5th grade'
		  'desc': 'Desire to be seen as a tastemaker for her friends. Hears about new music from older sister in middle school.'
		},
	]
  });
};