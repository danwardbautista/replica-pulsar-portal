import {Component} from "@angular/core";
import {RouterLink} from "@angular/router";

@Component({
  standalone: true,
  template: `
    <div class="mt-1 mb-3">
      <a [routerLink]="'/firewall'"
         style="font-weight: 500; text-decoration: none;">
        < Firewall</a>
    </div>

    <div>
      <div class="mb-4">
        <h3>Create Firewall Profile</h3>
      </div>

      <form>

        <div class="card mb-4">
          <fieldset class="card-body">

            <h5 class="card-title">1. Basic Details</h5>

            <div class="form-group row">
              <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" placeholder="Profile Name" formControlName="name">
              </div>
            </div>

            <div class="form-group row">
              <label for="inputEmail3" class="col-sm-2 col-form-label">Description</label>
              <div class="col-sm-10">
                <textarea class="form-control" id="inputEmail3"></textarea>
              </div>
            </div>

          </fieldset>
        </div>

        <div class="card mb-4">
          <fieldset class="card-body">

            <h5 class="card-title">2. Outbound Rules</h5>
            <!--<p class="text-muted">Reassuring text that explains what this is and what you do.</p>-->

            <div class="form-group row">
              <label for="inputEmail3" class="col-sm-2 col-form-label">Default Action</label>

              <div class="col-sm-5 p-2">

                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" id="outboundDefaultDeny" value="deny" formControlName="outboundDefault">
                  <label class="form-check-label" for="outboundDefaultDeny">DENY</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" id="outboundDefaultAllow" value="allow" formControlName="outboundDefault">
                  <label class="form-check-label" for="outboundDefaultAllow">ALLOW</label>
                </div>

              </div>

            </div>

            <div class="form-group row mb-0">

              <div class="col-sm-2">
                <label>Protocol</label>
              </div>

              <div class="col-sm-2">
                <label>Port Range</label>
              </div>

              <div class="col-sm-3">
                <label>Remote Address</label>
              </div>

              <div class="col-sm-4">
                <label>Description</label>
              </div>

              <div class="col-sm-1">
              </div>

            </div>


            <div class="form-group row" >

              <ng-container >

                <div class="col-sm-2">
                  <select class="form-control" formControlName="OutboundProtocol">
                    <option value="">ANY</option>
                    <option value="0">IP</option>
                    <option value="1">ICMP</option>
                    <option value="2">IGMP</option>
                    <option value="3">GGP</option>
                    <option value="4">IP-ENCAP</option>
                    <option value="5">ST2</option>
                    <option value="6">TCP</option>
                    <option value="7">CBT</option>
                    <option value="8">EGP</option>
                    <option value="9">IGP</option>
                    <option value="10">BBN-RCC-MON</option>
                    <option value="11">NVP-II</option>
                    <option value="12">PUP</option>
                    <option value="13">ARGUS</option>
                    <option value="14">EMCON</option>
                    <option value="15">XNET</option>
                    <option value="16">CHAOS</option>
                    <option value="17">UDP</option>
                    <option value="18">MUX</option>
                    <option value="19">DCN-MEAS</option>
                    <option value="20">HMP</option>
                    <option value="21">PRM</option>
                    <option value="22">XNS-IDP</option>
                    <option value="23">TRUNK-1</option>
                    <option value="24">TRUNK-2</option>
                    <option value="25">LEAF-1</option>
                    <option value="26">LEAF-2</option>
                    <option value="27">RDP</option>
                    <option value="28">IRTP</option>
                    <option value="29">ISO-TP4</option>
                    <option value="30">NETBLT</option>
                    <option value="31">MFE-NSP</option>
                    <option value="32">MERIT-INP</option>
                    <option value="33">DCCP</option>
                    <option value="34">3PC</option>
                    <option value="35">IDPR</option>
                    <option value="36">XTP</option>
                    <option value="37">DDP</option>
                    <option value="38">IDPR-CMTP</option>
                    <option value="39">TP++</option>
                    <option value="40">IL</option>
                    <option value="41">IPV6</option>
                    <option value="42">SDRP</option>
                    <option value="43">IPV6-ROUTE</option>
                    <option value="44">IPV6-FRAG</option>
                    <option value="45">IDRP</option>
                    <option value="46">RSVP</option>
                    <option value="47">GRE</option>
                    <option value="48">DSR</option>
                    <option value="49">BNA</option>
                    <option value="50">ESP</option>
                    <option value="51">AH</option>
                    <option value="52">I-NLSP</option>
                    <option value="53">SWIPE</option>
                    <option value="54">NARP</option>
                    <option value="55">MOBILE</option>
                    <option value="56">TLSP</option>
                    <option value="57">SKIP</option>
                    <option value="58">IPV6-ICMP</option>
                    <option value="59">IPV6-NONXT</option>
                    <option value="60">IPV6-OPTS</option>
                    <option value="62">CFTP</option>
                    <option value="64">SAT-EXPAK</option>
                    <option value="65">KRYPTOLAN</option>
                    <option value="66">RVD</option>
                    <option value="67">IPPC</option>
                    <option value="69">SAT-MON</option>
                    <option value="70">VISA</option>
                    <option value="71">IPCV</option>
                    <option value="72">CPNX</option>
                    <option value="73">CPHB</option>
                    <option value="74">WSN</option>
                    <option value="75">PVP</option>
                    <option value="76">BR-SAT-MON</option>
                    <option value="77">SUN-ND</option>
                    <option value="78">WB-MON</option>
                    <option value="79">WB-EXPAK</option>
                    <option value="80">ISO-IP</option>
                    <option value="81">VMTP</option>
                    <option value="82">SECURE-VMTP</option>
                    <option value="83">VINES</option>
                    <option value="84">TTP</option>
                    <option value="85">NSFNET-IGP</option>
                    <option value="86">DGP</option>
                    <option value="87">TCF</option>
                    <option value="88">EIGRP</option>
                    <option value="89">OSPFIGP</option>
                    <option value="90">Sprite-RPC</option>
                    <option value="91">LARP</option>
                    <option value="92">MTP</option>
                    <option value="93">AX.25</option>
                    <option value="94">IPIP</option>
                    <option value="95">MICP</option>
                    <option value="96">SCC-SP</option>
                    <option value="97">ETHERIP</option>
                    <option value="98">ENCAP</option>
                    <option value="100">GMTP</option>
                    <option value="101">IFMP</option>
                    <option value="102">PNNI</option>
                    <option value="103">PIM</option>
                    <option value="104">ARIS</option>
                    <option value="105">SCPS</option>
                    <option value="106">QNX</option>
                    <option value="107">A/N</option>
                    <option value="108">IPComp</option>
                    <option value="109">SNP</option>
                    <option value="110">Compaq-Peer</option>
                    <option value="111">IPX-in-IP</option>
                    <option value="112">CARP</option>
                    <option value="113">PGM</option>
                    <option value="115">L2TP</option>
                    <option value="116">DDX</option>
                    <option value="117">IATP</option>
                    <option value="118">STP</option>
                    <option value="119">SRP</option>
                    <option value="120">UTI</option>
                    <option value="121">SMP</option>
                    <option value="122">SM</option>
                    <option value="123">PTP</option>
                    <option value="124">ISIS</option>
                    <option value="125">FIRE</option>
                    <option value="126">CRTP</option>
                    <option value="127">CRUDP</option>
                    <option value="128">SSCOPMCE</option>
                    <option value="129">IPLT</option>
                    <option value="130">SPS</option>
                    <option value="131">PIPE</option>
                    <option value="132">SCTP</option>
                    <option value="133">FC</option>
                    <option value="134">RSVP-E2E-IGNORE</option>
                    <option value="135">Mobility-Header</option>
                    <option value="136">UDPLite</option>
                    <option value="137">MPLS-IN-IP</option>
                    <option value="138">MANET</option>
                    <option value="139">HIP</option>
                    <option value="140">SHIM6</option>
                    <option value="141">WESP</option>
                    <option value="142">ROHC</option>
                    <option value="240">PFSYNC</option>
                  </select>
                </div>

                <div class="col-sm-2">
                  <input type="text" class="form-control" placeholder="000 - 000" formControlName="OutboundPortRange">
                </div>

                <div class="col-sm-3">
                  <textarea class="form-control" placeholder="0.0.0.0/0" formControlName="OutboundIPPrefix"></textarea>
                </div>

                <div class="col-sm-4">
                  <input type="text" class="form-control" placeholder="Description" formControlName="OutboundDescription">
                </div>

                <div class="col-sm-1 text-right">
                  <button class="btn btn-danger" type="button">Delete
                  </button>
                </div>

              </ng-container>

            </div>

            <div class="form-group row">

              <div class="col-sm-1 ml-auto text-right">
                <button class="btn btn-primary" type="button">Add
                </button>
              </div>

            </div>

          </fieldset>
        </div>

        <div class="card mb-4">
          <fieldset class="card-body">

            <h5 class="card-title">3. Inbound Rules</h5>
            <!--<p class="text-muted">Reassuring text that explains what this is and what you do.</p>-->

            <div class="form-group row">
              <label for="inputEmail3" class="col-sm-2 col-form-label">Default Action</label>
              <div class="col-sm-5 p-2">

                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" id="inboundDefaultDeny" value="deny" formControlName="inboundDefault">
                  <label class="form-check-label" for="inboundDefaultDeny">DENY</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" id="inboundDefaultAllow" value="allow" formControlName="inboundDefault">
                  <label class="form-check-label" for="inboundDefaultAllow">ALLOW</label>
                </div>

              </div>
            </div>

            <div class="form-group row mb-0">

              <div class="col-sm-2">
                <label>Protocol</label>
              </div>

              <div class="col-sm-2">
                <label>Port Range</label>
              </div>

              <div class="col-sm-3">
                <label>Remote Address</label>
              </div>

              <div class="col-sm-4">
                <label>Description</label>
              </div>

              <div class="col-sm-1">
              </div>

            </div>


            <div class="form-group row" >

              <ng-container >

                <div class="col-sm-2">
                  <select class="form-control" formControlName="InboundProtocol">
                    <option selected>Protocol</option>
                    <option value="">ANY</option>
                    <option value="0">IP</option>
                    <option value="1">ICMP</option>
                    <option value="2">IGMP</option>
                    <option value="3">GGP</option>
                    <option value="4">IP-ENCAP</option>
                    <option value="5">ST2</option>
                    <option value="6">TCP</option>
                    <option value="7">CBT</option>
                    <option value="8">EGP</option>
                    <option value="9">IGP</option>
                    <option value="10">BBN-RCC-MON</option>
                    <option value="11">NVP-II</option>
                    <option value="12">PUP</option>
                    <option value="13">ARGUS</option>
                    <option value="14">EMCON</option>
                    <option value="15">XNET</option>
                    <option value="16">CHAOS</option>
                    <option value="17">UDP</option>
                    <option value="18">MUX</option>
                    <option value="19">DCN-MEAS</option>
                    <option value="20">HMP</option>
                    <option value="21">PRM</option>
                    <option value="22">XNS-IDP</option>
                    <option value="23">TRUNK-1</option>
                    <option value="24">TRUNK-2</option>
                    <option value="25">LEAF-1</option>
                    <option value="26">LEAF-2</option>
                    <option value="27">RDP</option>
                    <option value="28">IRTP</option>
                    <option value="29">ISO-TP4</option>
                    <option value="30">NETBLT</option>
                    <option value="31">MFE-NSP</option>
                    <option value="32">MERIT-INP</option>
                    <option value="33">DCCP</option>
                    <option value="34">3PC</option>
                    <option value="35">IDPR</option>
                    <option value="36">XTP</option>
                    <option value="37">DDP</option>
                    <option value="38">IDPR-CMTP</option>
                    <option value="39">TP++</option>
                    <option value="40">IL</option>
                    <option value="41">IPV6</option>
                    <option value="42">SDRP</option>
                    <option value="43">IPV6-ROUTE</option>
                    <option value="44">IPV6-FRAG</option>
                    <option value="45">IDRP</option>
                    <option value="46">RSVP</option>
                    <option value="47">GRE</option>
                    <option value="48">DSR</option>
                    <option value="49">BNA</option>
                    <option value="50">ESP</option>
                    <option value="51">AH</option>
                    <option value="52">I-NLSP</option>
                    <option value="53">SWIPE</option>
                    <option value="54">NARP</option>
                    <option value="55">MOBILE</option>
                    <option value="56">TLSP</option>
                    <option value="57">SKIP</option>
                    <option value="58">IPV6-ICMP</option>
                    <option value="59">IPV6-NONXT</option>
                    <option value="60">IPV6-OPTS</option>
                    <option value="62">CFTP</option>
                    <option value="64">SAT-EXPAK</option>
                    <option value="65">KRYPTOLAN</option>
                    <option value="66">RVD</option>
                    <option value="67">IPPC</option>
                    <option value="69">SAT-MON</option>
                    <option value="70">VISA</option>
                    <option value="71">IPCV</option>
                    <option value="72">CPNX</option>
                    <option value="73">CPHB</option>
                    <option value="74">WSN</option>
                    <option value="75">PVP</option>
                    <option value="76">BR-SAT-MON</option>
                    <option value="77">SUN-ND</option>
                    <option value="78">WB-MON</option>
                    <option value="79">WB-EXPAK</option>
                    <option value="80">ISO-IP</option>
                    <option value="81">VMTP</option>
                    <option value="82">SECURE-VMTP</option>
                    <option value="83">VINES</option>
                    <option value="84">TTP</option>
                    <option value="85">NSFNET-IGP</option>
                    <option value="86">DGP</option>
                    <option value="87">TCF</option>
                    <option value="88">EIGRP</option>
                    <option value="89">OSPFIGP</option>
                    <option value="90">Sprite-RPC</option>
                    <option value="91">LARP</option>
                    <option value="92">MTP</option>
                    <option value="93">AX.25</option>
                    <option value="94">IPIP</option>
                    <option value="95">MICP</option>
                    <option value="96">SCC-SP</option>
                    <option value="97">ETHERIP</option>
                    <option value="98">ENCAP</option>
                    <option value="100">GMTP</option>
                    <option value="101">IFMP</option>
                    <option value="102">PNNI</option>
                    <option value="103">PIM</option>
                    <option value="104">ARIS</option>
                    <option value="105">SCPS</option>
                    <option value="106">QNX</option>
                    <option value="107">A/N</option>
                    <option value="108">IPComp</option>
                    <option value="109">SNP</option>
                    <option value="110">Compaq-Peer</option>
                    <option value="111">IPX-in-IP</option>
                    <option value="112">CARP</option>
                    <option value="113">PGM</option>
                    <option value="115">L2TP</option>
                    <option value="116">DDX</option>
                    <option value="117">IATP</option>
                    <option value="118">STP</option>
                    <option value="119">SRP</option>
                    <option value="120">UTI</option>
                    <option value="121">SMP</option>
                    <option value="122">SM</option>
                    <option value="123">PTP</option>
                    <option value="124">ISIS</option>
                    <option value="125">FIRE</option>
                    <option value="126">CRTP</option>
                    <option value="127">CRUDP</option>
                    <option value="128">SSCOPMCE</option>
                    <option value="129">IPLT</option>
                    <option value="130">SPS</option>
                    <option value="131">PIPE</option>
                    <option value="132">SCTP</option>
                    <option value="133">FC</option>
                    <option value="134">RSVP-E2E-IGNORE</option>
                    <option value="135">Mobility-Header</option>
                    <option value="136">UDPLite</option>
                    <option value="137">MPLS-IN-IP</option>
                    <option value="138">MANET</option>
                    <option value="139">HIP</option>
                    <option value="140">SHIM6</option>
                    <option value="141">WESP</option>
                    <option value="142">ROHC</option>
                    <option value="240">PFSYNC</option>
                  </select>
                </div>

                <div class="col-sm-2">
                  <input type="text" class="form-control " placeholder="000 - 000" formControlName="InboundPortRange">
                </div>

                <div class="col-sm-3">
                  <textarea class="form-control " placeholder="0.0.0.0/0" formControlName="InboundIPPrefix"></textarea>
                </div>

                <div class="col-sm-4">
                  <input type="text" class="form-control" placeholder="Description" formControlName="InboundDescription">
                </div>

                  <div class="col-sm-1 text-right">
                    <button class="btn btn-danger" type="button">Delete
                    </button>
                  </div>

              </ng-container>

            </div>

            <div class="form-group row">


                <div class="col-sm-1 ml-auto text-right">
                  <button class="btn btn-primary" type="button">Add
                  </button>
                </div>

            </div>


          </fieldset>
        </div>


        <div class="my-3 text-right">
          <button class="btn btn-success" [routerLink]="'/firewall'" type="submit">
            Create Profile
          </button>
        </div>


      </form>

    </div>

  `,
  imports: [
    RouterLink
  ]
})
export class NewProfileComponent {

}
