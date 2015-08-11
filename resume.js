var $main = $('#main'); 
var $education = $('#education'); 
var $skills = $('#skills');
var $experience = $('#experience');
var $aCollapsed = $('.aCollapsed');
var $welcome = $('#welcome');
var $tech = $('#tech');
 
$aCollapsed.hide();
 
 $('#hEducation').on('click', function(){
   $welcome.hide();
   $aCollapsed.hide();
   $education.show(); 
 }); 

 $('#hSkills').on('click', function(){
   $welcome.hide();
   $aCollapsed.hide();
   $skills.show(); 
 }); 

 $('#hExperience').on('click', function(){
   $welcome.hide();
   $aCollapsed.hide();
   $experience.show();
 }); 

 $('#hTech').on('click', function(){
   $welcome.hide();
   $aCollapsed.hide();
   $tech.show();
 }); 
