import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Suspense, lazy} from "react";
import Loader from "./components/Loader";


const Dashboard = lazy(()=>import("./pages/Dashboard")) ;
const Products = lazy(()=>import("./pages/Products")) ;
const Customers = lazy(()=>import("./pages/Customers")) ;
const Transaction = lazy(()=>import("./pages/Transaction")) ;
const NewProduct = lazy(()=>import("./pages/management/NewProduct")) ;
const ProductManagement = lazy(()=>import("./pages/management/ProductManagement")) ;
const TransactionManagement = lazy(()=>import("./pages/management/TransactionManagement")) ;
const Bar = lazy(()=>import("./pages/charts/Bar")) ;
const Pie = lazy(()=>import("./pages/charts/Pie")) ;
const Line = lazy(()=>import("./pages/charts/Line")) ;

const StopWatch=lazy(()=>import("./pages/applications/Stopwatch")) ;
const Coupon=lazy(()=>import("./pages/applications/coupon")) ;
const Toss=lazy(()=>import("./pages/applications/Toss")) ;

const App=()=> {
  return (
    <Router>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/admin/dashboard" element={<Dashboard/>}/>
          <Route path="/admin/products" element={<Products/>}/>
          <Route path="/admin/customers" element={<Customers/>}/>
          <Route path="/admin/transaction" element={<Transaction/>}/>
          {/*charts */}
          <Route path="/admin/chart/bar" element={<Bar/>}/>
          <Route path="/admin/chart/pie" element={<Pie/>}/>
          <Route path="/admin/chart/line" element={<Line/>}/>
          {/*management */}
          <Route path="/admin/product/new" element={<NewProduct/>}/>
          <Route path="/admin/product/:id" element={<ProductManagement/>}/>
          <Route path="/admin/transaction/:id" element={<TransactionManagement/>}/>
          {/*apps */}
          <Route path="/admin/apps/stopwatch" element={<StopWatch/>}/>
          <Route path="/admin/apps/coupon" element={<Coupon/>}/>
          <Route path="/admin/apps/toss" element={<Toss/>}/>
        </Routes>
      </Suspense>
    </Router>
    )
  }

export default App