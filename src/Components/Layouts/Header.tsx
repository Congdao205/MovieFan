"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { LinkRouter } from "../Common/LinkRouter"
import { useNavigate } from "react-router-dom"
import { Search, Menu, X } from "lucide-react"
import { axiosCall } from "../../plugin/axiosCall"

export type Category = {
  _id: string
  name: string
  slug: string
}

export const Header = () => {
  const [input, setInput] = useState("")
  const [category, setCategory] = useState<Category[]>([])
  const [showCategory, setShowCategory] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input) {
      navigate(`/Search/${input}`)
      setInput("")
    }
  }

  const fetchCategory = async () => {
    try {
      const data = await axiosCall.get(`${import.meta.env.VITE_CATEGORY}`)
      setCategory(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchCategory()
  }, [])

  return (
    <div className="bg-black text-white">
      <div className="flex items-center justify-between p-4 lg:px-6">
        <div className="flex items-center">
          <LinkRouter
            name="MovieFan"
            className="text-red-500 text-2xl lg:text-3xl font-bold"
            domain=""
          ></LinkRouter>
        </div>

        <div className="hidden lg:flex items-center space-x-6">
          <LinkRouter name="Trang Chủ" domain=""></LinkRouter>
          <LinkRouter name="Phim Lẻ" link="phim-le" domain="Type"></LinkRouter>
          <LinkRouter name="Phim bộ" link="phim-bo" domain="Type"></LinkRouter>
          <LinkRouter name="Phim hoạt hình" link="hoat-hinh" domain="Type"></LinkRouter>

          <div className="relative">
            <button
              onClick={() => setShowCategory(!showCategory)}
              className="flex items-center space-x-1 hover:text-red-500 transition-colors"
            >
              <span>Thể loại</span>
              <span className={`transform transition-transform ${showCategory ? "rotate-180" : ""}`}>▾</span>
            </button>
            {showCategory && (
              <div className="absolute left-0 mt-2 w-[600px] bg-black/95 backdrop-blur-sm text-white rounded-lg shadow-xl p-6 grid grid-cols-4 gap-3 z-50 border border-gray-800">
                {category.map((cate) => (
                  <div
                    key={cate._id}
                    onClick={() => setShowCategory(false)}
                    className="hover:bg-gray-800 rounded p-2 transition-colors"
                  >
                    <LinkRouter name={cate.name} link={cate.slug} domain="Category"></LinkRouter>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <form onSubmit={handleSubmit} className="hidden md:flex items-center bg-gray-800 rounded-lg overflow-hidden">
            <input
              type="text"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              placeholder="Tìm kiếm phim..."
              className="bg-transparent px-4 py-2 text-white placeholder-gray-400 focus:outline-none w-64"
            />
            <button type="submit" className="px-3 py-2 hover:bg-gray-700 transition-colors">
              <Search size={20} />
            </button>
          </form>

          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="lg:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className="md:hidden px-4 pb-4">
        <form onSubmit={handleSubmit} className="flex items-center bg-gray-800 rounded-lg overflow-hidden">
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            placeholder="Tìm kiếm phim..."
            className="bg-transparent px-4 py-3 text-white placeholder-gray-400 focus:outline-none flex-1"
          />
          <button type="submit" className="px-4 py-3 hover:bg-gray-700 transition-colors">
            <Search size={20} />
          </button>
        </form>
      </div>

      {showMobileMenu && (
        <div className="lg:hidden bg-black/95 backdrop-blur-sm border-t border-gray-800">
          <div className="px-4 py-6 space-y-4">
            <div className="space-y-3">
              <div onClick={() => setShowMobileMenu(false)}>
                <LinkRouter name="Trang Chủ" domain=""></LinkRouter>
              </div>
              <div onClick={() => setShowMobileMenu(false)}>
                <LinkRouter name="Phim Lẻ" link="phim-le" domain="Type"></LinkRouter>
              </div>
              <div onClick={() => setShowMobileMenu(false)}>
                <LinkRouter name="Phim bộ" link="phim-bo" domain="Type"></LinkRouter>
              </div>
              <div onClick={() => setShowMobileMenu(false)}>
                <LinkRouter name="Phim hoạt hình" link="hoat-hinh" domain="Type"></LinkRouter>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-4">
              <button
                onClick={() => setShowCategory(!showCategory)}
                className="flex items-center justify-between w-full text-left py-2"
              >
                <span className="text-lg font-medium">Thể loại</span>
                <span className={`transform transition-transform ${showCategory ? "rotate-180" : ""}`}>▾</span>
              </button>

              {showCategory && (
                <div className="mt-3 grid grid-cols-2 gap-2 max-h-64 overflow-y-auto">
                  {category.map((cate) => (
                    <div
                      key={cate._id}
                      onClick={() => {
                        setShowCategory(false)
                        setShowMobileMenu(false)
                      }}
                      className="bg-gray-800 rounded-lg p-3 hover:bg-gray-700 transition-colors"
                    >
                      <LinkRouter name={cate.name} link={cate.slug} domain="Category"></LinkRouter>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
