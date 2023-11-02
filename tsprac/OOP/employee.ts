abstract class NhanVien {
    maNV: string;
    tenNV: string;
    luongCB: number;
    heSo: number;

    constructor(maNV: string, tenNV: string, luongCB: number, heSo: number) {
        this.maNV = maNV;
        this.tenNV = tenNV;
        this.luongCB = luongCB;
        this.heSo = heSo;
    }

    addNV(maNV: string, tenNV: string, luongCB: number, heSo: number) {
        let tblNV = document.getElementById("tbl-nhan-vien")
    }

}

class QuanLy extends NhanVien {

}

class NVThuong extends NhanVien {

}

class Sep extends NhanVien {

}

const NhanVienList: NhanVien[] = [];

