/**
 * Created by akshay on 7/3/17.
 */
var atm=new function() {
    this.tt_count = 0;
    this.fh_count = 0;
    this.oh_count = 0;
    this.current_Balance = 0;
    this.max_limit = 25000;
    this.flag=0;
    this.addMoney = function () {
       if(this.flag)
       {
           alert("Amount can be deposited only once");
           return;
       }
       if(document.getElementById('2000_notes').value.length==0||document.getElementById('500_notes').value.length==0||document.getElementById('100_notes').value.length==0)
       {
           alert("All fields are required");
           return;
       }

        if(document.getElementById('2000_notes').value<0||document.getElementById('500_notes').value<0||document.getElementById('100_notes').value<0)
        {
            alert("Negative Value Not Allowed");
            return;
        }


        if(document.getElementById('2000_notes').value==0&&document.getElementById('500_notes').value==0&&document.getElementById('100_notes').value==0)
        {
            alert("Enter Some Amount");
            return;
        }


        this.tt_count = document.getElementById('2000_notes').value;
        this.fh_count = document.getElementById('500_notes').value;
        this.oh_count = document.getElementById('100_notes').value;

        this.current_Balance = (this.tt_count * 2000) + (this.fh_count * 500) + (this.oh_count * 100);

        var markup = "<tr><td style='color:#00A000'>" + this.current_Balance + "</td><td style='color:#00A000'>" + this.tt_count + "</td><td style='color:#00A000'>" + this.fh_count + "</td><td style='color:#00A000'>" + this.oh_count + "</td><td style='color:#00A000'>" + this.current_Balance + "</td></tr>";
        $("table tbody").append(markup);
        this.flag=1;
    }


    this.withdraw=function() {
      var withdraw_amt= document.getElementById('amount').value;

          if(this.current_Balance==0)
          {
              alert("Transaction cannnot be completed");
              return;
          }

          if(withdraw_amt > this.current_Balance ||withdraw_amt > this.max_limit||withdraw_amt<=0)
          {
              alert("Transaction cannnot be completed");
              return;
          }

          if(withdraw_amt%100!=0)
          {
              alert("Amount should be in multiple of 100");


              return ;
          }
        if(withdraw_amt>=2000)
        {
            var wtc=0,wfc=0,whc=0;
            var wa=withdraw_amt, tc=this.tt_count,fc=this.fh_count,hc=this.oh_count;

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
                hc--

            }

            var total=(wtc*2000)+(wfc*500)+(whc*100);

            if(total==withdraw_amt)
            {
                this.tt_count-=wtc;
                this.fh_count-=wfc;
                this.oh_count-=whc;
                this.current_Balance-=withdraw_amt;
            }
            else{
                alert("Transaction cannot be processed");
                return ;
            }

        }




       else if(withdraw_amt>=500)
        {
            var wtc=0,wfc=0,whc=0;
            var wa=withdraw_amt, tc=this.tt_count,fc=this.fh_count,hc=this.oh_count;


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

            var total=(wtc*2000)+(wfc*500)+(whc*100);

            if(total==withdraw_amt)
            {
                this.tt_count-=wtc;
                this.fh_count-=wfc;
                this.oh_count-=whc;
                this.current_Balance-=withdraw_amt;
            }
            else{
                alert("Transaction cannot be processed");
                return ;
            }

        }




       else if(withdraw_amt>=100)
        {
            var wtc=0,wfc=0,whc=0;
            var wa=withdraw_amt, tc=this.tt_count,fc=this.fh_count,hc=this.oh_count;


            while(hc>0&&wa>=100) {
                whc++;
                wa -= 100;
                hc--;

            }

            var total=(wtc*2000)+(wfc*500)+(whc*100);

            if(total==withdraw_amt)
            {
                this.tt_count-=wtc;
                this.fh_count-=wfc;
                this.oh_count-=whc;
                this.current_Balance-=withdraw_amt;
            }
            else{
                alert("Transaction cannot be processed");
                return ;
            }

        }

   else
        {
            alert("Transaction cannot be processed");
            return;
        }
















        var markup = "<tr><td style='color: red'>" + withdraw_amt + "</td><td style='color:red'>" + this.tt_count + "</td><td style='color:red'>" + this.fh_count + "</td><td style='color:red'>" + this.oh_count + "</td><td style='color:red'>" + this.current_Balance + "</td></tr>";
        $("table tbody").append(markup);

        //console.log(this.currentAmount+"\n"+res+"\n"+no_of_2k+"\n"+no_of_5h+"\n"+no_of_h+"\n"+left+"\n");
    };







}
