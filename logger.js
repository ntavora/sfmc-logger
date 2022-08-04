<script runat="server" language="JavaScript">
  Platform.Load("core", "1.1.1");
  try{
    function Logger() {
      var delogger = []
      var service = {
        log: console
      };
      // init
      _init();
      return service;
      function _init() {
        var filtro = {
          Property: "Name",SimpleOperator: "equals",Value: "Logger" }
        delogger = DataExtension.Retrieve(filtro);
        if(delogger.length == 0){
          DataExtension.Add({
            "CustomerKey": Platform.Function.GUID(),
            "Name": "Logger",
            "Fields": [{
              "Name": "Key",
              "FieldType": "Text",
              "MaxLength": 4000,
              "IsRequired": false
            }
                       ,{
                         "Name": "Date", "FieldType": "Date" }
                      ]
          }
                           );
        }
        delogger = DataExtension.Init("Logger");
      }
      function console(value) {
        delogger.Rows.Add({
          Key:value,Date:new Date()}
                         );
        Variable.SetValue("@console" , value);
</script>
<script>
  var data =`[SFMC Logger]: %%=v(@console)=%%`
      console.log(data);
    </script>
<script runat="server" language="JavaScript">
  }
  }
  var sfmcLogger = Logger();
  sfmcLogger.log("SFMC Logger version 1.0");
  }
  catch(ex){
    Write(Stringifiy(ex));
  }
</script>
