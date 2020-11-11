Blockly.Blocks['string_hello_world'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Hello World");
    this.setOutput(true, "String");
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};