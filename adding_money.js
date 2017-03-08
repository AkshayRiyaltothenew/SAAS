var atm=new function() {
    //Default Denominations
    this.tt_count = 0;
    this.fh_count = 0;
    this.oh_count = 0;
    this.f_count=0;
    this.current_Balance = 0;
    this.max_limit = 25000;
    this.flag=0;//used for deposit validation(false initially)
    
    //Method for depositing amount in the atm
    this.addMoney = function () {
       if(this.flag)
       {

           $("#error_message").html("*Amount can be deposited only once.");
           return;
       }
       
       //NaN validation
        if(isNaN(document.getElementById('2000_notes').value)||isNaN(document.getElementById('500_notes').value)||isNaN(document.getElementById('100_notes').value)||isNaN(document.getElementById('50_notes').value))
        {
            $("#error_message").html("*Only Integer values can be inserted.");
            return;
        }
        
        //Check on fields if they are empty
        if(document.getElementById('2000_notes').value.length==0||document.getElementById('500_notes').value.length==0||document.getElementById('100_notes').value.length==0||document.getElementById('50_notes').value.length==0)
       {
           $("#error_message").html("*All fields are mandatory.");
           return;
       }
        //negative value validation
        if(document.getElementById('2000_notes').value<0||document.getElementById('500_notes').value<0||document.getElementById('100_notes').value<0||document.getElementById('50_notes').value<0)
        {
            $("#error_message").html("*Negative Values Not Allowed");
            return;
        }
        
        //Check:Need value for withdrawal
        if(document.getElementById('2000_notes').value==0&&document.getElementById('500_notes').value==0&&document.getElementById('100_notes').value==0&&document.getElementById('50_notes').value==0)
        {
            $("#error_message").html("*Enter Some Amount.");
            return;
        }


        this.tt_count = parseInt(document.getElementById('2000_notes').value);
        this.fh_count = parseInt(document.getElementById('500_notes').value);
        this.oh_count = parseInt(document.getElementById('100_notes').value);
        this.f_count = parseInt(document.getElementById('50_notes').value);
        this.current_Balance = (this.tt_count * 2000) + (this.fh_count * 500) + (this.oh_count * 100)+(this.f_count*50);

        //add column on addition of amount
        var markup = "<tr><td style='color:#00A000'>" + this.current_Balance + "</td><td style='color:#00A000'>" + this.tt_count + "</td><td style='color:#00A000'>" + this.fh_count + "</td><td style='color:#00A000'>" + this.oh_count +"</td><td style='color:#00A000'>" + this.f_count+ "</td><td style='color:#00A000'>" + this.current_Balance + "</td></tr>";
        $("table tbody").append(markup);
        $("#error_message").html("");
        this.flag=1;
        
        $("#2000_notes").val("");
        $("#500_notes").val("");
        $("#100_notes").val("");
        $("#50_notes").val("");
    }

        
      this.withdraw=function() {
      var withdraw_amt= parseInt(document.getElementById('amount').value);
      
        //Method for withdrawl of money from the atm
        if(document.getElementById('amount').value.length==0)
        {
            $("#error_message").html("*Field is mandatory.");
            return;
        }
        //current balance check
          if(this.current_Balance==0)
          {
              $("#error_message").html("*Sorry!! Transaction cannot be processed. Insufficient Balance.");
              return;
          }

          //check the max limit before withdrawal
          if(withdraw_amt > this.current_Balance ||withdraw_amt > this.max_limit||withdraw_amt<=0)
          {
              $("#error_message").html("*Transaction Cannot be Processed.");

              return;
          }

          if(withdraw_amt%50!=0)
          {
              $("#error_message").html("*Amount should be in multiple of 50.");

              return ;
          }
        if(withdraw_amt>=2000)
        {
            var wtc=0,wfc=0,whc=0,wfnc=0;
            var wa=withdraw_amt, tc=this.tt_count,fc=this.fh_count,hc=this.oh_count,fnc=this.f_count;

            while(tc>0&&wa>=2000)
            {
                wtc++;
                wa-=2000;
               tc--;
            }

            while(fc>0&&wa>=500)
            {
                wfc++;
                wa-=500;
                fc--;
            }

            while(hc>0&&wa>=100) {
                whc++;
                wa -= 100;
                hc--;

            }
             while(fnc>0&&wa>=50) {
                wfnc++;
                wa -= 50;
                fnc--;
            }

             var total=(wtc*2000)+(wfc*500)+(whc*100)+(wfnc*50);

            if(total==withdraw_amt)
            {
                this.tt_count-=wtc;
                this.fh_count-=wfc;
                this.oh_count-=whc;
                this.f_count-=wfnc;
                this.current_Balance-=withdraw_amt;
            }
            else{
                $("#error_message").html("*Transaction Cannot be Processed.");
                return ;
            }

        }




       else if(withdraw_amt>=500)
        {
            var wtc=0,wfc=0,whc=0,wfnc=0;
            var wa=withdraw_amt, tc=this.tt_count,fc=this.fh_count,hc=this.oh_count,fnc=this.f_count;


            while(fc>0&&wa>=500)
            {
                wfc++;
                wa-=500;
                fc--;
            }

            while(hc>0&&wa>=100) {
                whc++;
                wa -= 100;
                hc--;
            }
             while(fnc>0&&wa>=50) {
                wfnc++;
                wa -= 50;
                fnc--;
            }

             var total=(wtc*2000)+(wfc*500)+(whc*100)+(wfnc*50);

            if(total==withdraw_amt)
            {
                this.tt_count-=wtc;
                this.fh_count-=wfc;
                this.oh_count-=whc;
                this.f_count-=wfnc;
                this.current_Balance-=withdraw_amt;
            }
            else{
                $("#error_message").html("*Transaction Cannot be Processed.");
                return ;
            }

        }
       else if(withdraw_amt>=100)
        {
           var wtc=0,wfc=0,whc=0,wfnc=0;
            var wa=withdraw_amt, tc=this.tt_count,fc=this.fh_count,hc=this.oh_count,fnc=this.f_count;


            while(hc>0&&wa>=100) {
                whc++;
                wa -= 100;
                hc--;
            }
            while(fnc>0&&wa>=50) {
                wfnc++;
                wa -= 50;
                fnc--;
            }
             var total=(wtc*2000)+(wfc*500)+(whc*100)+(wfnc*50);

            if(total==withdraw_amt)
            {
                this.tt_count-=wtc;
                this.fh_count-=wfc;
                this.oh_count-=whc;
                this.f_count-=wfnc;
                this.current_Balance-=withdraw_amt;
            }
            else{
                $("#error_message").html("*Transaction Cannot be Processed.");
                return ;
            }

        }
        else if(withdraw_amt>=50)
        {
            var wtc=0,wfc=0,whc=0,wfnc=0;
            var wa=withdraw_amt, tc=this.tt_count,fc=this.fh_count,hc=this.oh_count,fnc=this.f_count;

            while(fnc>0&&wa>=50) {
                wfnc++;
                wa -= 50;
                fnc--;
            }
        
            var total=(wtc*2000)+(wfc*500)+(whc*100)+(wfnc*50);

            if(total==withdraw_amt)
            {
                this.tt_count-=wtc;
                this.fh_count-=wfc;
                this.oh_count-=whc;
                this.f_count-=wfnc;
                this.current_Balance-=withdraw_amt;
            }
            else{
                $("#error_message").html("*Transaction Cannot be Processed.");
                return ;
            }
    }

   else
        {
            $("#error_message").html("*Transaction Cannot be Processed.");
            return;
        }
        
        //add column for each withdrawal
         var markup = "<tr><td style='color: red'>" + withdraw_amt + "</td><td style='color:red'>" + this.tt_count + "</td><td style='color:red'>" + this.fh_count + "</td><td style='color:red'>" + this.oh_count +  "</td><td style='color:red'>" + this.f_count +"</td><td style='color:red'>" + this.current_Balance + "</td></tr>";
        $("table tbody").append(markup);
        $("#error_message").html("");
        
        $("#amount").val("");
    };
}
