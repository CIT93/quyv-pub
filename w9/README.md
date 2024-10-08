# quyv-pri
Quy vu private repo CIT93
I feel like i am understanding the code but there are times i do feel lost due to different types of commands
like i know the purpose of the renderTblheading function is responsible for creating and rendering the table header
RenderTbl is a function that has a responsible for rendering the entire table based on the provided data
there isnt any return value but there are manipulates the DOM directly by appending the constructed table
One of the first function is is renderTblHeading to create the basic table structure
it create the tbody element that will hold all the data row
function then loops through each element in the data array
then for each row it creates a tr element and loops through the values in the row
after creating cells for the datas points it creates a action cell that have the edit and delete buttins
then the last steps the tbody is appeneded to the table and the whole table is added to the TBL

LocalStorage 
The LocalStrorage is used to store data persistently in the browser, even after the page is reloaded or the browser is closed allows developers to save user preferences, form inputs, or other data without needing to interact with a server for each session 

Why do we need it?
We need local Storage to enable certain features and provide a better user experience in cases where users fill out long forms, localStorage can store their input temporarily, so they don’t lose progress if the page refreshes or the session expires

Its managed 

To store data, we use local Storage setItem(key, value). This method allows us to store key-value pairs where both the key and value are strings