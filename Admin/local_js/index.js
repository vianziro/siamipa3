function menu(idx) {
		var menus = ["frm_lst_lgn.php",
		             "frm_sum_exec.php",
					 "frm_lst_file.php",
					 "frm_bimbingan.php",
					 "frm_sidang.php",
		             "frm_sebaran.php?idx=1",
					 "frm_riwayat_sebaran.php?idx=1",
					 "frm_jdwl_kuliah.php?idx=1",
					 "frm_riwayat_jdwl_kuliah.php?idx=1",
					 "frm_cetak.php?idx=1&ctk_idx=1",
					 "frm_rekap_bap_dhmd.php",
					 "frm_cetak.php?idx=1&ctk_idx=2",
					 "frm_cetak.php?idx=1&ctk_idx=3",
					 "frm_publish_nilai.php",
					 "frm_edt_pub_nilai.php",
					 "frm_epsbed_msmhs.php",
					 "frm_epsbed_trakd.php",
					 "frm_epsbed_trnlm.php",
					 "frm_epsbed_trnlp.php",
					 "frm_epsbed_kmk.php",
					 "frm_epsbed_trakm.php",
					 "frm_epsbed_trlsm.php",
					 "frm_forlap.php",
					 "frm_summary.php",
					 "frm_dt_mhs.php",
					 "frm_konversi.php",
					 "frm_status_mhs.php",
					 "frm_khs.php",
					 "frm_trans.php",
					 "frm_krs.php",
					 "frm_riwayat_krs.php",
					 "frm_dt_dosen.php",
					 "frm_riwayat.php",
					 "frm_hutang.php",
					 "frm_ksd_ngajar.php",
					 "frm_riwayat_ksd_ngajar.php",
					 "frm_kuosioner.php",
					 "frm_mtk.php",
					 "frm_riwayat_krs_mtk.php",
					 "frm_keu_angkatan.php",
					 "frm_keu_mhs.php",
					 "frm_tran_keu_mhs.php",
					 "frm_tot_tran_keu_mhs.php",
					 "frm_rekap_tran_keu_mhs.php",
					 "frm_ajuan_keu.php",
					 "frm_rekap_ajuan_keu.php",
					 "frm_profile.php",
					 "frm_gnt_pass.php",
					 "../global_code/frm_login.php?idx=1&isout=1"
					];
		
		$("#mainFrame").attr("src",menus[idx]);
		return 0;
	}