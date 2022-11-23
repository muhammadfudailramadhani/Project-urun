import React, { useState, useEffect, Component } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import profile from '../../Images/profile.png';
import { data } from 'autoprefixer';

const Peringkat = () => {
    const [offset, setOffset] = useState(0);
    const [data, setData] = useState([]);
    const [data1, setData2] = useState([]);
    const perPage = 4;
    const [pageCount, setPageCount] = useState(0);
    const [deletedList] = useState([]);
    const [currentPage, setCurrentPage] = useState(0); 

    const getData = async() => {
        const data = [
            {
                nama: "Fudail Ramadhani",
                presentase: 100
            },
            {
                nama: "Fudail Ramadhani",
                presentase: 90
            },
            {
                nama: "Fudail Ramadhani",
                presentase: 250
            },
            {
                nama: "Fudail Ramadhani",
                presentase: 20
            },
            {
                nama: "Fudail Ramadhani",
                presentase: 40
            },
            {
                nama: "Fudail Ramadhani",
                presentase: 200
            },
        ];
        let data1 = [
            {
                Nama: "budi",
                TugasMa: [
                    {
                        Ma: "mengerjakan backlink",
                        Status: true,
                        tanggal: 15,
                        bulan: 1,
                        tahun: 2022
                    },
                    {
                        Ma: "mengerjakan backlink",
                        Status: false,
                        tanggal: 15,
                        bulan: 1,
                        tahun: 2022
                    }
                ]
            },
            {
                Nama: "eko",
                TugasMa: [
                    {
                        Ma: "mengerjakan backlink",
                        Status: true
                        ,
                        tanggal: 15,
                        bulan: 1,
                        tahun: 2022
                    },
                    {
                        Ma: "mengerjakan backlink",
                        Status: false
                        ,
                        tanggal: 15,
                        bulan: 1,
                        tahun: 2022
                    },
                    {
                        Ma: "mengerjakan backlink",
                        Status: true
                        ,
                        tanggal: 15,
                        bulan: 1,
                        tahun: 2022
                    },
                    {
                        Ma: "mengerjakan backlink",
                        Status: true
                        ,
                        tanggal: 15,
                        bulan: 1,
                        tahun: 2022
                    },
                    {
                        Ma: "mengerjakan backlink",
                        Status: false
                        ,
                        tanggal: 15,
                        bulan: 1,
                        tahun: 2022
                    }
                ]
            },
            {
                Nama: "agus",
                TugasMa: [
                    {
                        Ma: "mengerjakan backlink",
                        Status: true
                        ,
                        tanggal: 15,
                        bulan: 1,
                        tahun: 2022
                    },
                    {
                        Ma: "mengerjakan backlink",
                        Status: false
                        ,
                        tanggal: 15,
                        bulan: 1,
                        tahun: 2022
                    }
                ]
            },
            {
                Nama: "cipung",
                TugasMa: [
                    {
                        Ma: "mengerjakan backlink",
                        Status: true
                        ,
                        tanggal: 15,
                        bulan: 1,
                        tahun: 2022
                    },
                    {
                        Ma: "mengerjakan backlink",
                        Status: false
                        ,
                        tanggal: 15,
                        bulan: 1,
                        tahun: 2022
                    }
                ]
            },
            {
                Nama: "gala",
                TugasMa: [
                    {
                        Ma: "mengerjakan backlink",
                        Status: true,
                        tanggal: 15,
                        bulan: 1,
                        tahun: 2022
                    },
                    {
                        Ma: "mengerjakan backlink",
                        Status: true,
                        tanggal: 15,
                        bulan: 1,
                        tahun: 2022
                    },
                    {
                        Ma: "mengerjakan backlink",
                        Status: true,
                        tanggal: 15,
                        bulan: 1,
                        tahun: 2022
                    },
                    {
                        Ma: "mengerjakan backlink",
                        Status: true,
                        tanggal: 15,
                        bulan: 1,
                        tahun: 2022
                    }
                ]
            },
            {
                Nama: "bambang",
                TugasMa: [
                    {
                        Ma: "mengerjakan backlink",
                        Status: true,
                        tanggal: 15,
                        bulan: 1,
                        tahun: 2022
                    },
                    {
                        Ma: "mengerjakan backlink",
                        Status: false,
                        tanggal: 15,
                        bulan: 1,
                        tahun: 2022
                    },
                    {
                        Ma: "mengerjakan backlink",
                        Status: false,
                        tanggal: 15,
                        bulan: 1,
                        tahun: 2022
                    },
                    {
                        Ma: "mengerjakan backlink",
                        Status: false,
                        tanggal: 15,
                        bulan: 1,
                        tahun: 2022
                    }
                ]
            },
        ];


        const ascData = data.sort((a, b) => (a.presentase < b.presentase) ? 1 : -1)
        const slice = ascData.slice(offset, offset + perPage)
        const postData = slice.map(pd =>
            <React.Fragment>
                <div className='overflow-y-auto pt-2'>
                    <div className="grid grid-cols-12 w-96 flex-auto h-14 bg-white rounded-xl drop-shadow-xl  ">
                        <div className=' col-span-2 '>
                            <img className='w-14 h-14 py-2 pl-3  ' src={profile} alt="" />
                        </div>
                        <div className=' col-span-6 pl-4 pt-3'>
                            <p>{pd.nama}</p>
                            <div className='w-52 bg-green-400 h-3 rounded-2xl'></div>
                        </div>
                        <div className='col-span-4 py-2 pl-12 pt-6'>
                            <div className='w-16 bg-green-200 h-6 rounded-lg'>
                                <div className='mx-auto text-center font-serif text-green-600'>{pd.presentase}%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>)
        for (let i = 0; i < data1.length; i++) {
            for (let j = i + 1; j < data1.length; j++) {
                let doneTask1 = (data1[i].TugasMa).filter(function (item) {
                    return item.Status;
                }).length;
                let allTask1 = (data1[i].TugasMa).length;
                let persentase1 = (doneTask1 / allTask1) * 100;
                let doneTask2 = (data1[j].TugasMa).filter(function (item) {
                    return item.Status;
                }).length;
                let allTask2 = (data1[j].TugasMa).length;
                let persentase2 = (doneTask2 / allTask2) * 100;
                if (persentase1 < persentase2) {
                    let temp;
                    temp = data1[i];
                    data1[i] = data1[j];
                    data1[j] = temp;
                }
            }
        }
        const slice1 = data1.slice(offset, offset + perPage)
        const postData1 = slice1.map(x => {
            let doneTask = (x.TugasMa).filter(function (item) {
                return item.Status;
            }).length;
            let allTask = (x.TugasMa).length;
            let persentase = (doneTask / allTask) * 100;
            return (
                <React.Fragment>
                    <div className='overflow-y-auto pt-2'>
                        <div className="grid grid-cols-12 w-96 flex-auto h-14 bg-white rounded-xl drop-shadow-xl  ">
                            <div className=' col-span-2 '>
                                <img className='w-14 h-14 py-2 pl-3  ' src={profile} alt="" />
                            </div>
                            <div className=' col-span-6 pl-4 pt-3'>
                                <p>{x.Nama}</p>
                                <div className='w-52 bg-green-400 h-3 rounded-2xl'></div>
                            </div>
                            <div className='col-span-4 py-2 pl-12 pt-6'>
                                <div className='w-16 bg-green-200 h-6 rounded-lg'>
                                    <div className='mx-auto text-center font-serif text-green-600'>{persentase}%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment >
            )
            
        })
        setData(postData)
        setData2(postData1)
        setPageCount(Math.ceil(data,data1.length / perPage))
    }
    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage*perPage)
}
useEffect(() => {
    getData()
  }, [offset])
  return (
   
    <div>
    <div className='pt-20 pb-10 '>
        <div className=' bg-slate-200 rounded-lg w-full h-96  drop-shadow-xl  '>
            <div className='w-96 mx-auto font-extrabold text-2xl pt-3 pl-20'>Peringkat Teratas</div>
            <div className='grid grid-cols-2 gap-72 flex-auto w-full h-10 pt-1 pl-16 pr-14'>
                <div className=' pl-24 pr-20 text-center font-medium'>GOAL</div>
                <div className=' pl-14 pr-20 text-center font-medium'>MA</div>
            </div>
            <div>
                <div className='pl-14 '>
                    <div className='grid grid-cols-2   gap-x-44 gap-y-3  '>
                        <div>{data}</div>
                        <div>{data1}</div>
                        <ReactPaginate
                            className=''
                            previousLabel={"prev"}
                            nextLabel={"next"}
                            breakLabel={"..."}
                            breakClassName={"break-me"}
                            pageCount={this.state.pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={this.handlePageClick}
                            containerClassName={"pagination"}
                            subContainerClassName={"pages pagination"}
                            activeClassName={"active"} />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default Peringkat;
