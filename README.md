<h1>Custom Form with dyanmic field</h1>

<h2>Features<h2>
    
    1. Users can register and login,but email is unique.
    2. Admin users can create survey form with dynamic fields.
    3. New fields can be added.
    4. When users answer survey, email is sent to them.
    
<h2>System Requirements</h2>
    
    1. php => ^7.2 | ^8.0,
    2. laravel => 8
    
<h2> Common Code Files</h2>

web.php and api.php (Handle Route)
app/Moldels Folder contain all Model php files
    
Frontend Code Files

Home Controller is to show survey form with fields and save user answers. 

Api Code Files

RegisterController is for new user register and login
SurveyController is to show survey forms and save answers

<h2>Database Structure</h2>
    
   Required tables are already setup in database/migration.
  1.forms table is to store survey form and fields table is for custom fields.
  2.form_field table is pivot for forms and fields tables.
  3.user answers are stored in surveys table.
    
