function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "Factorial_Task"};
	this.sidHashMap["Factorial_Task"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "Factorial_Task:1"};
	this.sidHashMap["Factorial_Task:1"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<Root>/Constant"] = {sid: "Factorial_Task:9"};
	this.sidHashMap["Factorial_Task:9"] = {rtwname: "<Root>/Constant"};
	this.rtwnameHashMap["<Root>/Display"] = {sid: "Factorial_Task:10"};
	this.sidHashMap["Factorial_Task:10"] = {rtwname: "<Root>/Display"};
	this.rtwnameHashMap["<Root>/For Iterator Subsystem"] = {sid: "Factorial_Task:1"};
	this.sidHashMap["Factorial_Task:1"] = {rtwname: "<Root>/For Iterator Subsystem"};
	this.rtwnameHashMap["<Root>/Scope"] = {sid: "Factorial_Task:15"};
	this.sidHashMap["Factorial_Task:15"] = {rtwname: "<Root>/Scope"};
	this.rtwnameHashMap["<Root>/Output"] = {sid: "Factorial_Task:14"};
	this.sidHashMap["Factorial_Task:14"] = {rtwname: "<Root>/Output"};
	this.rtwnameHashMap["<S1>/In1"] = {sid: "Factorial_Task:2"};
	this.sidHashMap["Factorial_Task:2"] = {rtwname: "<S1>/In1"};
	this.rtwnameHashMap["<S1>/For Iterator"] = {sid: "Factorial_Task:3"};
	this.sidHashMap["Factorial_Task:3"] = {rtwname: "<S1>/For Iterator"};
	this.rtwnameHashMap["<S1>/Product"] = {sid: "Factorial_Task:7"};
	this.sidHashMap["Factorial_Task:7"] = {rtwname: "<S1>/Product"};
	this.rtwnameHashMap["<S1>/Unit Delay"] = {sid: "Factorial_Task:17"};
	this.sidHashMap["Factorial_Task:17"] = {rtwname: "<S1>/Unit Delay"};
	this.rtwnameHashMap["<S1>/Output"] = {sid: "Factorial_Task:4"};
	this.sidHashMap["Factorial_Task:4"] = {rtwname: "<S1>/Output"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
