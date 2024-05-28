import React from "react";

const ServiceSection = () => {
  return (
    <div className="bg-gray-100 py-8 mt-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap justify-center gap-4">
        <div className="w-full md:w-1/3 p-4">
          <div className="flex items-center justify-center mb-4">
            <img src="./images/team.png" className="w-[100px]" alt="Team" />
          </div>
          <h3 className="text-xl font-medium text-center mb-2">
            Teknisi in-House
          </h3>
          <p className="text-gray-500 text-center">
            Mungkin Anda sering menemukan penyedia jasa cuci dan service AC,
            khususnya yang online hanya bermitra dengan pihak ketiga dalam
            mengerjakan layanannya, kemudian mereka mengambil komisi dari sana.
            Ini sangat berbeda dengan kami, semua teknisi Kulmi adalah teknisi
            in-house yang telah di-training dan akan bekerja sesuai dengan
            standar yang kami terapkan. Jadi kami dapat memastikan kualitas
            teknisi yang datang ke rumah Anda.
          </p>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <div className="flex items-center justify-center mb-4">
            <img src="./images/tick.png" className="w-[100px]" alt="Tick" />
          </div>
          <h3 className="text-xl font-medium text-center mb-2">
            Teknisi Profesional
          </h3>
          <p className="text-gray-500 text-center">
            Semua teknisi kami telah terlatih, berpengalaman dan bersertifikat.
            Bahkan kepala teknisi kami memiliki pengalaman lebih dari 20 tahun
            di dunia AC dan pendingin ruangan. Kami sangat menyarankan Anda
            untuk tidak menggunakan jasa dari perusahaan yang tidak
            berpengalaman dan tidak memiliki lisensi karena hal ini tidak dapat
            menjamin unit AC Anda dikerjakan dengan baik atau bahkan dapat
            merusak unit AC Anda.
          </p>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <div className="flex items-center justify-center mb-4">
            <img
              src="./images/security.png"
              className="w-[100px]"
              alt="Security"
            />
          </div>
          <h3 className="text-xl font-medium text-center mb-2">
            Harga Transparan
          </h3>
          <p className="text-gray-500 text-center">
            Semua harga layanan kami terbuka dan bisa di akses di website. Jadi
            customer tidak perlu khawatir akan biaya yang bisa membengkak,
            karena semua harga sudah kami buka secara transparan. Apabila ada
            pekerjaan tambahan diluar permintaan awal, kami akan selalu
            memberikan penawaran terlebih dahulu sebelum mulai pekerjaan, jadi
            customer bisa tenang tanpa perlu takut harga yang bisa jadi
            melambung tinggi.
          </p>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <div className="flex items-center justify-center mb-4">
            <img
              src="./images/phone-call.png"
              className="w-[100px]"
              alt="Phone Call"
            />
          </div>
          <h3 className="text-xl font-medium text-center mb-2">
            Garansi 30 Hari
          </h3>
          <p className="text-gray-500 text-center">
            Kami memberikan garansi selama 30 hari untuk pengerjaan pemasangan
            dan pergantian spare part. Hal ini tentu membuktikan bahwa kami
            sangat yakin dengan kualitas pelayanan yang kami berikan dan kami
            membebaskan Anda dari rasa khawatir. Jika Anda menemukan masalah
            dengan kualitas pekerjaan kami, mudah saja, Anda dapat langsung
            menelepon kami dan kami akan mengatasinya untuk Anda.
          </p>
        </div>
        {/* ... other service boxes */}
      </div>
    </div>
  );
};

export default ServiceSection;
