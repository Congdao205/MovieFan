import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">MovieFan 🎬</h2>
          <p className="text-gray-400 text-sm">
            Cập nhật phim mới mỗi ngày, trải nghiệm mượt mà, hình ảnh sắc nét – không bỏ lỡ bất kỳ khoảnh khắc điện ảnh nào
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Liên kết nhanh</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white">Trang chủ</a></li>
            <li><a href="/phim-le" className="hover:text-white">Phim lẻ</a></li>
            <li><a href="/phim-bo" className="hover:text-white">Phim bộ</a></li>
            <li><a href="/hoat-hinh" className="hover:text-white">Hoạt hình</a></li>
            <li><a href="/search" className="hover:text-white">Tìm kiếm</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Kết nối với chúng tôi</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/hcng205" target="_blank" className="hover:text-blue-500"><Facebook/></a>
            <a href="https://www.youtube.com/" target="_blank" className="hover:text-red-500"><Youtube/></a>
            <a href="#" target="_blank" className="hover:text-sky-400"><Twitter/></a>
            <a href="https://www.instagram.com/dhc_2685/" target="_blank" className="hover:text-pink-500"><Instagram /></a>
          </div>
        </div>
      </div>

      {/* Dòng bản quyền */}
      <div className="border-t border-gray-700 mt-8 pt-4  text-sm text-gray-500 text-center">
            <p>© {new Date().getFullYear()} MovieFan</p>
      </div>
    </footer>
  );
};
