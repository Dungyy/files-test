function CreateFile(pathFile)
{
    objFS.open(pathFile, 'w', function (err, file) {
        if (err) throw err;
        console.log('File was created successfully.');
      }); 
}
 
module.exports = {
    ReadFileCustom,
    CreateFile
}