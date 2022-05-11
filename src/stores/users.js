import {defineStore} from 'pinia';
import { useEnvStore } from './enviroment.js'

export const useUserStore = defineStore('userStore',{
  state: () => ({
      profile: {
        name: '',
        surnameFather: '',
        surnameMother: '',
        email:'',
        userId:'',
        phone:'',
        validEmail:'',
        hasProducts: ''
      },
      deliverAddress: {
        streetName:'',
        streetNumber:'',
        innerNumer:'',
        blockName:'',
        zipCode:'',
        cityName:'',
        idStateColony:'',
        deliveryRef:'',
        receiveName: ''
      },
      invoiceAddress: {
        streetName:'',
        streetNumber:'',
        innerNumer:'',
        blockName:'',
        zipCode:'',
        cityName:'',
        rfc:'',
        stateName: ''
      },
      product: {
        productId: '',
        price: '0',
        velocity: '',
        description: '',
        type: '',
        firstProductCost: ''
      },
      user: {
        profile: {
          name:'',
          surnameFather:'',
          surnameMother:'',
          email:'',
          userId:'',
          phone:'',
          validEmail: ''
        },
        leadAddress: {
          street:'',
          streetNumber:'',
          colony:'',
          city:'',
          state:'',
          zipCode:'',
          latitude:'',
          longitude:'',
          formattedAddress: ''
        },
        flagsOtherAddress: true,
        cfdi: false,
        keySpeeds:'',
        bearerToken:'',
        estimatedDeliveryDate:'',
        references:'',
        orderID:'',
        account:'',
        tipo:'',
        cardType:'',
        terminacion:'',
        nombreRecibe:'',
        direccionEnvio:'',
        rfc: ''
      },
      recargas: {
        status:'',
        nombreProducto:'',
        nombrePersonalizado:'',
        cuentaSiebel:'',
        diasDisponibles:'',
        vigencia:'',
        porcentajeUsado:'',
        montoRecargar:'',
        productMB:'',
        productTypeId:'',
        keySpeed:'',
        lat:'',
        long:'',
        saldo:'',
        dias:'',
        equipmentType:'',
        descuento:'',
        accountSubtype:'',
        hasChargebacks:'',
        hasChangeServiceInProgress: ''
      },
      cambioDomicilio: {
        status:'',
        nombreProducto:'',
        nombrePersonalizado:'',
        cuentaSiebel:'',
        domicilio:'',
        equipmentType:'',
        accountSubtype:'',
        productOld:'',
        precioOld: ''
      },
      recargasPendientes: {
        status:'',
        nombreProducto:'',
        nombrePersonalizado:'',
        cuentaSiebel:'',
        montoRecargar:'',
        productMB:'',
        productTypeId:'',
        keySpeed:'',
        listOfPlans: ''
      },
      flexVendor: {
        vendorid:'',
        usersiebel:'',
        vendorname:'',
        vendortype: ''
      },
      flexSupportCC: {
        userid:'',
        usersiebel:'',
        username:'',
        usertype:'',
        canal: ''
      },
      ticketCompra: {
        accountSiebel:'',
        amount: 0,
        fechaPedido:'',
        installationOrder:'',
        fechaEstimada:'',
        productName:'',
        addressServices:'',
        addressDelivery:'',
        nameUser:'',
        productType: ''
      }
    }
  ),
  persist: true,
  getters: {
  },
  actions:{
    async login(payload){
      try {
        const envStore = useEnvStore();
        const URL_LOGIN = envStore.env[envStore.envStage].serverURL + '/login';
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: JSON.stringify(payload),
          redirect: 'follow'
        };
        
        const resp = await fetch(URL_LOGIN, requestOptions).then(result => result);
        if(resp.headers.get('Authorization') !== undefined){
          this.user.bearerToken = resp.headers.get('Authorization').replace('Bearer ', '');
          this.profile = JSON.parse(resp.headers.get('Profile'));
        }
      } catch (error) {
        console.table(error);
      }
    },
    logout(){
      this.$reset();
    }
  }
})